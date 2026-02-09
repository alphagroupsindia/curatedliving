"use client";
import SectionTitle from "@/lib/UI/SectionTitle/SectionTitle";
import Styles from "./HomeLatestProjects.module.css";
import SectionHeading from "@/lib/UI/SectionHeading/SectionHeading";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import SectionButton from "@/lib/UI/SectionButton/SectionButton";
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
export default class LatestProjects extends Component {
  render() {
    const projectData = [
      {
        id: 1,
        title: "Villa in Mysore",
        location: "location",
        descrption: "",
        image:img1,
      },
      {
        id: 2,
        title: "Project Title",
        location: "location",
        descrption: "",
        image:img2,
      },
      {
        id: 3,
        title: "Project Title",
        location: "location",
        descrption: "",
        image:img3,
      },
      {
        id: 4,
        title: "Project Title",
        location: "location",
        descrption: "",
        image:img4,
      },
    ];
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1200,
      autoplaySpeed: 6000,
      variableWidth: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
   
    return (
      <>
        <div className={Styles.homeLatestProjects}>
          <div className="container container-custom">
            <SectionHeading
              weight={400}
              size="40"
              color="rgb(235,235,235)"
              heading="Latest Projects"
            ></SectionHeading>
            <div className="col-sm-2"></div>
          </div>
          <div className={`row  m-0 p-0`}>
            <div className={`col-lg-12 mt-4 ${Styles.titleWrapper}`}></div>
            <div className={Styles.infoPanel}>
              <Slider {...settings}>
                {projectData.map((item) => (
                  <div key={item.id}>
                    <div className={Styles.infoCard}>
                      <div className={Styles.infoCardInside}>
                        <Image className="h-100 w-100" src={item.image} alt={item.location}></Image>
                        <h3 className={Styles.h3}>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            
            </div>
           
          </div>
          <div className="mt-5 text-end">
              <SectionButton
                css="button-dark"
                text="Read More"
                link="./projects"
              ></SectionButton>
            </div>
        </div>
      </>
    );
  }
}
