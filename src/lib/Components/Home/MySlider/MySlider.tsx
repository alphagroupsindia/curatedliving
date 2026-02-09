"use client";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import slider1 from "./slider1.jpg";
import slider2 from "./slider2.jpg";
import slider3 from "./slider3.jpg";
import slider4 from "./slider4.jpg";
import Dm from "./dm.png";
import { Changa } from "next/font/google";
const inter = Changa({ subsets: ["latin"] });
import Image from "next/image";
import Styles from "./MySlider.module.css";
import { SetStateAction, useEffect, useState } from "react";
import useTypingEffect from "@/lib/Hooks/useTypingEffect/useTypingEffect"; // Adjust the import path as needed

function MySlider({ language = "en" }) {
  const [index, setIndex] = useState(0);

  const currentTitle = "Living";
  const typedTitle = useTypingEffect(currentTitle, 90);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={`row m-0 p-0 ${Styles.mySlider}`}>
      <div className="col-lg-12 m-0 p-0">
        <Carousel
          className={Styles.carousel}
          interval={6000}
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
        >
          <Carousel.Item>
            <Image
              src={slider3}
              className={Styles.slider}
              alt="Curated Living"
            ></Image>

            <Carousel.Caption className={Styles.captionHomeWidth}>
              <Container>
                <Row>
                  <Col xs={12} md={6} lg={4}>
                    <div className={`${Styles.animatedRectangle}`}></div>
                    <div className={Styles.textWrapper}>
                    Transforming spaces{" "}
                    <strong className={Styles.strong}>
                      {" "}
                      Curated {typedTitle}
                    </strong>
                    <small className={Styles.small}></small>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={slider2} className={Styles.slider} alt="Office"></Image>
            <Carousel.Caption className={Styles.captionHomeWidth}>
              <Container>
                <Row>
                  <Col xs={12} md={6} lg={4}>
                    <div className={`${Styles.animatedRectangle}`}></div>
                    <div className={Styles.textWrapper}>
                    Transforming Ideas into
                    <strong className={Styles.strong}> Reality</strong>
                    <small className={Styles.small}></small>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={slider1}
              className={Styles.slider}
              alt="Curated Living"
            ></Image>
            <Carousel.Caption className={Styles.caption}>
              <Container>
                <Row>
                  <Col xs={12} md={6} lg={4}>
                    <div className={`${Styles.animatedRectangle}`}></div>
                    <div className={Styles.textWrapper}>
                    Inspiring lives
                    <strong className={Styles.strong}> Curated Living</strong>
                    <small className={Styles.small}></small>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={slider4} className={Styles.slider} alt="Cloud"></Image>

            <Carousel.Caption className={Styles.caption}>
              <Container>
                <Row>
                  <Col xs={12} md={6} lg={4}>
                    <div className={`${Styles.animatedRectangle}`}></div>
                    <div className={Styles.textWrapper}>
                    Transform home for
                      <strong className={Styles.strong}> Curated Living</strong>
                      <small className={Styles.small}></small>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default MySlider;
