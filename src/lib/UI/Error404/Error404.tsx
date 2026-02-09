import React from "react";
import Styles from "./Error404.module.css";
import NavHeader from "@/lib/Components/HeaderBar/HeaderBar";

const Error404: React.FC = () => {
  return (
    <>
    <NavHeader></NavHeader>
    <div className={Styles.errorContainer}>
      <h2 className={Styles.errorMessage}>Coming Soon..</h2>
      <a href="/" className={Styles.homeLink}>
      Go to Home Page !
      </a>
    </div>
    </>
  );
};

export default Error404;
