import React from "react";
import Image from "next/image";
import Logo from "./logo.png";
import Styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import FooterStrip from "../FooterStrip/FooterStrip";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SectionText from "@/lib/UI/SectionText/SectionText";
import SectionHeading from "@/lib/UI/SectionHeading/SectionHeading";

function Footer() {
  return (
    <>
      
      <div id="contact"></div>
      <footer className={`container-fluid footer text-muted ${Styles.footer}`}>
        <section className="container">
          <div className={`row`}>
            <div className="col-lg-3 col-sm-6 col-12 mt-5">
              <div>
                <Image
                  src={Logo}
                  alt="SaRa Footer"
                  className={Styles.logo}
                  width={140}
                ></Image>
              </div>
              <div className={`mt-4 ${Styles.aboutiC}`}>
                
              </div>
              <div className="mt-3">
              <div className={Styles.title}>Follow us</div>
                <a href="">
                  {" "}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className={Styles.icon}
                    width={18}
                  ></FontAwesomeIcon>
                </a>

                <a href="">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={Styles.icon}
                    width={18}
                  ></FontAwesomeIcon>
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={Styles.icon}
                    width={18}
                  ></FontAwesomeIcon>
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className={Styles.icon}
                    width={18}
                  ></FontAwesomeIcon>
                </a>
               
              </div>
            </div>

            <div className="col-lg-3 col-sm-3 col-12 mt-5">
              <div className={Styles.title}>Quick Links</div>
              <ul className={Styles.ul}>
                <li>
                  <a href="../about-us">About Us </a>
                </li>
                <li>
                  <a href="../projects">Projects </a>
                </li>
                <li>
                  <a href="../gallery">Gallery </a>
                </li>
               
              </ul>
            </div>
            <div className="col-lg-2 col-sm-2 col-12 mt-5">
              <div className={Styles.title}>Bit More</div>
              <ul className={Styles.ul}>
              <li>
                  <a href="../blogs">Blogs</a>
                </li>
              <li>
                  <a href="../designs">Designs </a>
                </li>
               
                <li>
                  <a href="../contact-us">Contact Us</a>
                </li>
                
               
              </ul>
            </div>

            <div className="col-lg-3 col-sm-3 col-12 mt-5">
              <div className={Styles.title}>Curated Living</div>
              <SectionText text="#422, 6th Main Rd, Vijayanagar 1st Stage, Mysuru, Karnataka" line="30" char="0.2" color="rgb(220 220 220)" size="15"> </SectionText>

              <SectionText text="+91 88843 59990" line="10" char="0.2" weight="600" color="rgb(220 220 220)" size="18"> </SectionText>
              <SectionText text="+91 88843 69990" line="10" char="0.2" color="rgb(220 220 220)" size="18"> </SectionText>
              <SectionText text="sales@curatedliving.in" line="10" char="0.2" color="rgb(220 220 220)" size="20"> </SectionText>
            </div>
          </div>
        </section>
      </footer>
      <FooterStrip></FooterStrip>{" "}
    </>
  );
}

export default Footer;
