"use client"
import React, { useState } from "react";
import Styles from "./PageHeaderVideo.module.css";
import ALL_URL from "@/app/apiConfig";
import ReactPlayer from 'react-player';

const PageHeaderVido = ({ title, video, message, color }) => {
  
  const videourl = video;
  console.log(videourl);
  
  return (
    <>
    <div className={Styles.playerWrapper}>
    <ReactPlayer
      config={{
        file: {
          attributes: {
            controlsList: "nodownload",
            preload:"auto",
          },
        },
      }}
      //onContextMenu={(e) => e.preventDefault()}
      className={Styles.reactPlayer}
      onContextMenu={(e) => e.preventDefault()}
      url={videourl}
      width="100%"
      height="100%"
      playsinline 
      pip={false}
      muted 
      playing
      loop
      controls

    />
    <div className={Styles.pageHeader}>
      <h1 className={Styles.h1} style={{ color: color }}>
        {title}
      </h1>
      <h2 className={Styles.h2} style={{ color: color }}>
        {message}
      </h2>
      
    </div>
  </div>
    
    </>
  );
};

export default PageHeaderVido;
