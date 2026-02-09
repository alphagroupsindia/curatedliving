"use client"
import { useState,useEffect } from "react";
import Styles from "./SectionHeading.module.css";

const SectionHeading = (props) => {
  const marginTop=props.top?props.top:"0";
  const marginBottom=props.bottom?props.bottom:"0";
  const textColor = props.color ? props.color : "rgb(21 0 80)";
  const lineHeight =props.line ? props.line : "20px";
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  useEffect(() => {
    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <h2
        className={Styles.heading}
        style={{
          color: textColor,
          fontSize:
            (isMobile && props.mobile
              ? props.size / props.mobile
              : props.size) + "px",
          lineHeight: lineHeight,
          marginTop: marginTop,
          marginBottom: marginBottom,
        }}
      >
        {props.heading}
      </h2>
    </>
  );
};
export default SectionHeading;
