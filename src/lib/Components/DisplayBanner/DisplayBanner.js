"use client";  // Add this line at the top of your component

import banner from "./banner.png";
import bannerMobile from "./banner-mobile.png";
import styles from "./DisplayBanner.module.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "../Enquiry/Modal/Modal";
import EnquiryForm from "../Enquiry/EnquiryForm/EnquiryForm";

const DisplayBanner = () => {
    const [modalShow,setModalShow] = useState(false);
    const handleOpenModal = () => {
        setModalShow(true);
        document.body.style.overflow = "hidden"; // Disable scrolling
      };
    
      const handleCloseModal = () => {
        setModalShow(false);
        document.body.style.overflow = "unset"; // Disable scrolling
      };
    

    return (
      <div className="container container-custom">
        <div className={styles.bannerWrapper} onClick={handleOpenModal}>
          <Image src={banner} alt="banner" className={styles.banner} />
          <Image
            src={bannerMobile}
            alt="banner"
            className={styles.bannerMobile}
          />
        </div>
        <Modal show={modalShow} onClose={handleCloseModal}>
          <EnquiryForm
            onClose={handleCloseModal}
            closeButton={true}
          ></EnquiryForm>
        </Modal>
      </div>
    );
}

export default DisplayBanner;
