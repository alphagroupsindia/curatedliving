import React from "react";
import Styles from "./GoogleMap.module.css";
function GoogleMap() {
  return (
    <>
      <div className={Styles.googleMapContainer}>
        
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.8029795083357!2d76.6157085!3d12.329044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7be20e149351%3A0x4861adafdcfd576f!2sCurated%20Living%20Experience%20Center!5e0!3m2!1sen!2sin!4v1717059791189!5m2!1sen!2sin" 
          width="100%"
          height="400"
          loading="lazy">
        </iframe>
      
    </>
  );
}
export default GoogleMap;
