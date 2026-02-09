import React from "react";
import Styles from "./FooterStrip.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function FooterStrip() {
  return (
    <>
      <div className={Styles.footerBranch}></div>
      <div className={Styles.footerStrip}>
        <div className="container">
          <div className="row pt-3 pb-3">
            <div className="col-12 col-sm-8">
              <div className={Styles.copyright}>
                Copyright © 2024 www.curatedliving.in 
              </div>{" "}
            </div>
            <div className="col-sm-4 col-12 text-end">
              <a
                href="../terms-and-conditions"
                className={`${Styles.link} ${Styles.vline}`}
              >
                Terms
              </a>
              <a
                href="../privacy-policy"
                className={`${Styles.link} ${Styles.vline}`}
              >
                Privacy Policy
              </a>
              <a href="../privacy-policy" className={`${Styles.link}`}>
                Contact Us
              </a>
            </div>
            <div className="col-6 col-sm-4 col-lg-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterStrip;
