"use client";
import SectionTitle from "@/lib/UI/SectionTitle/SectionTitle";
import Styles from "./HomeTestimonial.module.css";
import SectionHeading from "@/lib/UI/SectionHeading/SectionHeading";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import SectionButton from "@/lib/UI/SectionButton/SectionButton";
import TestimonialData from './testimonialData';
export default class Testimonial extends Component {
 

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1200,
      autoplaySpeed: 6000,
      //cssEase: "linear",
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
    let testimonials = TestimonialData;
    return (
      <>
        <div className={Styles.homeTeam}>
          
          <div className="row m-0">
          
            <div className="col-sm-8">
          
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
        <div className={Styles.testimonials}>
          <div className="container">
            <div className={`row  m-0 p-0`}>
              <div className={`col-lg-12 ${Styles.titleWrapper}`}></div>
              <div className={Styles.infoPanel}>
                <Slider {...settings}>
                  {testimonials.map(
                    (item) =>
                       (
                        <div key={item.id}>
                          <div className={Styles.infoCard}>
                            <div className={Styles.infoCardInside}>
                            <div className={Styles.quote}>”</div>
                              <p className={Styles.name}>{item.author}</p>
                              <p className={` ${Styles.project}`}>
                                {item.from}
                              </p>
                              <p className={Styles.p}>{item.quote}</p>
                                 
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </Slider>
              </div>
            </div>
            
          </div>
          <div className="mt-5 text-end">
            <SectionButton
              css="button-dark"
              text="Read More"
              link="./testimonials"
            ></SectionButton>
          </div>
        </div>
      </>
    );
  }
}
