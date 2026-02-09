import SectionHeading from '@/lib/UI/SectionHeading/SectionHeading';
import styles from './AboutUs.module.css';
import PageHeaderVideo from '@/lib/UI/PageHeaderVideo/PageHeaderVideo';
import AboutWhyus from '@/lib/Components/About/AboutWhyus/AboutWhyus';
const AboutUs=()=>{

    return (
      <>
        <div className={styles.aboutUs}>
          <div className="container container-custom">
            <SectionHeading
              heading="Startegy-led "
              color="#ffcc00"
              size="60"
              line="65px"
            ></SectionHeading>
            <SectionHeading
              heading="Design in Every Detail"
              size="50"
              color="rgb(224,224,224)"
              line="65px"
            ></SectionHeading>
          </div>
        </div>
        <PageHeaderVideo video="/gallery/videos/video.mp4"></PageHeaderVideo>
        <div className={styles.aboutUs}>
          <div className="container container-custom">
            <div className="row">
              <div className="col-3">
                <h2 className={styles.h2}>
                  A few{" "} <br></br>
                  <strong className={styles.strong}> words</strong> <br></br>
                  About us
                </h2>
              </div>
              <div className="col-9">
                <p className={styles.p}>
                Welcome to Curated Living, <br></br> <br></br> where we are dedicated to crafting
                extraordinary kitchen and living spaces. We understand that
                kitchens and living spaces are the heart of every home, where
                people gather to connect, unwind, and feel a sense of belonging.
                Our priority is people – your needs, your unique lifestyles, and
                your evolving desires. At Curated Living, we challenge
                conventional notions of interior and kitchen designs to ensure
                that our creations meet the ever-changing demands of our
                customers. <br></br> <br></br> We constantly explore new possibilities and infuse
                our designs with meticulous attention to detail and a passion
                for using authentic materials. Our distinctive kitchen designs
                are meticulously crafted to simplify and streamline daily life,
                taking into account individual requirements and the specific
                layout of each space. By seamlessly integrating design,
                functionality, and innovation, we create kitchen and living
                spaces that effortlessly cater to real-life needs.
                </p>
              </div>
            </div>
            <div className="row mt-5 pt-5">
            <div className="col-12">
                <h2 className={styles.h2}>
                Transformative Living: Design, {" "}
                  <strong className={styles.strong}> Quality</strong> Affordability
                </h2>
              </div>
              <div className="col-12">
              <p className={styles.p}>
                <br></br>
                What sets Curated Living apart is our unwavering dedication to
                incorporating cutting-edge German technologies, ergonomic
                Italian designs, and timeless creativity. <br></br> With years of
                experience in serving and developing products for people, we
                have established ourselves as a trusted name in the industry.
                Our team of expert designers ensures ergonomic design principles
                and optimal space utilization, while our comprehensive
                after-sales service guarantees customer satisfaction. We take
                immense pride in our state-of-the-art manufacturing facility,
                where we utilize German technology to curate Italian design
                furniture at affordable prices. <br></br> <br></br> Our ultimate goal is to
                seamlessly blend quality, functionality, and affordability,
                making a positive impact on the lives of our valued customers.
                We believe that a well-designed interior not only reflects your
                mood but also enhances the functionality of your space. At
                Curated Living, we are passionate about creating kitchens that
                foster cherished memories and simplify your daily routines.
                Embark on this transformative journey with us and experience the
                unparalleled joy of curated living.
                </p>
              </div>
              
            </div>
          </div>
          <AboutWhyus></AboutWhyus>
        </div>
      </>
    );
}
export default AboutUs;