import SectionHeading from "@/lib/UI/SectionHeading/SectionHeading";
import styles from "./HomeServices.module.css";
import SectionTitle from "@/lib/UI/SectionTitle/SectionTitle";
import SectionButton from "@/lib/UI/SectionButton/SectionButton";
import Image from 'next/image';
import imgPic from './image.jpg';
const HomeServices = () => {
  return (
    <div className={styles.homeAbout}>
      <div className="container container-custom">
        <div className="row">
          <div className="col-sm-6">
            <div className={styles.imageWrap}>
           <Image src={imgPic} className="w-100 h-auto"></Image>
           </div>
          </div>
          <div className="col-sm-6">
         
            <h2 className={styles.h2}>
              Thought out to the{" "}
              <strong className={styles.strong}> smallest </strong> detail
            </h2>
           
            <p className={styles.p}>
              At Curated Living, our priority is people – your needs, your
              unique lifestyles, and your evolving desires. We constantly
              challenge the conventional notions of interior and kitchen designs
              to ensure that our creations meet the ever-changing demands of our
              customers. Our commitment to innovation drives us to explore new
              possibilities and infuse our designs with meticulous attention to
              detail and a passion for using authentic materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeServices;
