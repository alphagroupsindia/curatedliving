"use client";
import React, { useCallback, useEffect, useState } from "react";
import Styles from "./PhotoLightbox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import {
  faArrowLeft,
  faArrowRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

const PhotoLightbox = (props) => {
  const colSize = props.col ? props.col : "col-sm-3";
  const title = props.title ? props.title : false;
  const height = props.height ? props.height : "175px";
  const isLightbox = props.lightbox ? props.lightbox : false;
  
  const show = props.show ? props.show : props.data.length;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState(props.data);
  const [shiftIndex, setShiftIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const displayImages = images.slice(0, isMobile ? props.data.length : show);
  const scroll = props.scroll ? (isMobile ? false : props.scroll) : false;


  

  const openModal = (index) => {
    if (isLightbox) {
      setIsModalOpen(true);
      setCurrentImageIndex(index);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const goToPrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex < props.data.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const shiftLeft = () => {
    const newImages = [...images];
    const firstImage = newImages.shift();
    newImages.push(firstImage);
    setImages(newImages);
    setShiftIndex(prevValue => prevValue + 1);
  };

  const shiftRight = () => {
    const newImages = [...images];
    const lastImage = newImages.pop();
    newImages.unshift(lastImage);
    setImages(newImages);
    if (shiftIndex === 0) {
      setShiftIndex(props.data.length - 1);
    } else {
      setShiftIndex((prevValue) => prevValue - 1);
    }
  };

  const handleKeyDown = useCallback((e) => {
    if (isModalOpen) {
      if (e.key === 'ArrowLeft') {
        goToPrevImage();
      } else if (e.key === 'ArrowRight') {
        goToNextImage();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    }
  }, [isModalOpen, goToPrevImage, goToNextImage, closeModal]);
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  const imageWrapperStyle = {
    height: `${height}px`,
  };

  return (
    <>
      <div className={Styles.photoLightbox}>
        <div className="container">
          <div className={Styles.scroll}>
            <div className="row">
              {scroll && (
                <>
                  <div className={`${Styles.scrollWrap}`}>
                    <button
                      className={`${Styles.scrollButton} ${Styles.scrollLeft}`}
                      onClick={shiftLeft}
                    >
                      <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                    </button>
                  </div>
                  <div className={`${Styles.scrollWrap}`}>
                    <button
                      className={`${Styles.scrollButton} ${Styles.scrollRight}`}
                      onClick={shiftRight}
                    >
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                  </div>
                </>
              )}

              {images && displayImages.length > 0 && (
                <>
                  {displayImages.map((item, index) => (
                    <div key={index} className={`${colSize} p-1`}>
                      <div
                        className={Styles.imageWrapper}
                        style={isMobile ? {} : imageWrapperStyle}
                        onClick={() =>
                          openModal((index + shiftIndex) % props.data.length)
                        }
                      >
                        {title && (
                          <div className={Styles.title}>{item.title}</div>
                        )}
                        {typeof item.file === "string" ? (
                          <img
                            className={Styles.img}
                            key={index}
                            src={item.thumb ? item.thumb : item.file}
                            alt={`Image ${index}`}
                          />
                        ) : (
                          <Image
                            className={Styles.img}
                            key={index}
                            src={item.thumb ? item.thumb : item.file}
                            alt={`Image ${index}`}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </>
              )}

              {isModalOpen && !isMobile && (
                <div className={Styles.modalOverlay} onClick={closeModal}>
                  <div className={Styles.modal} onClick={stopPropagation}>
                    {title ? (
                      <div className={Styles.strip}>
                        {props.data[currentImageIndex].title}
                      </div>
                    ) : (
                      <></>
                    )}
                    <a className={Styles.closeButton} onClick={closeModal}>
                      <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                    </a>
                    <a className={Styles.prevButton} onClick={goToPrevImage}>
                      ⟨
                    </a>
                    {props.data[currentImageIndex].type === "video" ? (
                      <>
                        {" "}
                        <ReactPlayer
                          config={{
                            file: {
                              attributes: {
                                controlsList: "nodownload",
                                poster: "/gallery/videos/play.png",
                              },
                            },
                          }}
                          className={Styles.reactPlayer}
                          url={props.data[currentImageIndex].file}
                          width="100%"
                          height="100%"
                          controls
                          light={false}
                          pip={true}
                        />
                      </>
                    ) : (
                      <>
                        {typeof props.data[currentImageIndex].file ===
                        "string" ? (
                          <img
                            src={props.data[currentImageIndex].file}
                            className={Styles.lightboxImage}
                            alt={`Image ${currentImageIndex}`}
                          />
                        ) : (
                          <Image
                            src={props.data[currentImageIndex].file}
                            className={Styles.lightboxImage}
                            alt={`Image ${currentImageIndex}`}
                          />
                        )}{" "}
                        (<></>)
                      </>
                    )}

                    <a className={Styles.nextButton} onClick={goToNextImage}>
                      ⟩
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoLightbox;
