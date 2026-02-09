import SectionHeading from "@/lib/UI/SectionHeading/SectionHeading";
import styles from "./HomeAbout.module.css";
import SectionTitle from "@/lib/UI/SectionTitle/SectionTitle";
import SectionButton from "@/lib/UI/SectionButton/SectionButton";
import imgInt from './about.jpg';
import Image from 'next/image';
const HomeAbout = () => {
  return (
    <div className={styles.homeAbout}>
      <div className="container container-custom">
        <div className="row">
          <div className="col-sm-6 mb-5">
            <SectionTitle
              color="rgb(255, 204, 0)"
              title="About Us"
            ></SectionTitle>
            <h2 className={styles.h2}>
              Strategy-led <strong className={styles.strong}> design</strong> in
              every detail
            </h2>
            <p className={styles.p}>
              Welcome to Curated Living, where we are dedicated to crafting
              extraordinary kitchen and living spaces. We understand that
              kitchens and living spaces are the heart of the modern home, where
              people gather to connect, unwind, and feel a sense of belonging.
            </p>
            <SectionButton text="Learn More" link="about-us"></SectionButton>
          </div>
          <div className="col-sm-6">
            <div className={styles.imageWrap}>
              <Image className="w-100 h-auto" alt="Curated Living Startegy Led Design" src={imgInt}></Image>
              
              <div className={styles.design}>
                 
              </div>
              <div className={styles.signature}>At Curated Living, we don{"'"}t just design spaces; we design experiences.</div>
              <div className={styles.quote}>”</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeAbout;
