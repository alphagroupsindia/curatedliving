import SectionTitle from '@/lib/UI/SectionTitle/SectionTitle';
import styles from './AboutWhyus.module.css';
import SectionHeading from '@/lib/UI/SectionHeading/SectionHeading';
import icon1 from './icon1.png';
import Image from 'next/image';
import SectionButton from '@/lib/UI/SectionButton/SectionButton';
import { faCartFlatbed, faDraftingCompass, faGlobe, faIndianRupee, faPalette, faRulerCombined, faStreetView, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYandexInternational } from '@fortawesome/free-brands-svg-icons';
const AboutWhyus=()=>{
    const data = [
      {
        icon: faPalette ,
        title: "Crafting lifestyle elegance",
        description: "We seamlessly blend timeless design with modern comfort, creating bespoke spaces that reflect your unique style and elevate your everyday experience. Our commitment to quality craftsmanship and personalized service ensures your living space is more than a place it’s an expression of your individuality and a sanctuary tailored just for you."
      },
      {
        icon: faStreetView,
        title: "User Centric",
        description: "Our designs are thoughtfully crafted with ergonomics in mind, ensuring optimal comfort for daily use. From sleek office furniture to versatile home essentials, each product seamlessly blends functionality with ergonomic design to enhance your everyday experience."
      },
      {
        icon: faRulerCombined,
        title: "Qualify Craftmanship",
        description: "Our furniture embodies the essence of Qualift Craftsmanship—each piece meticulously crafted with precision and care. Our commitment to detail ensures not just furniture, but timeless works of art that elevate the aesthetic and functionality of your living spaces."
      },
      {
        icon: faIndianRupee,
        title: "Affordable Pricing",
        description: "Discover affordability without compromise. Our commitment to providing high-quality products extends to budget-friendly pricing, ensuring that exceptional design and craftsmanship are accessible to all."
      },
      {
        icon: faGlobe,
        title: "International Designs",
        description: "Immerse yourself in the perfect blend of German technology and Italian design. Our furniture showcases the harmonious marriage of precision engineering and timeless aesthetics, bringing you unparalleled quality and style at its finest."
      },
      {
        icon: faUserCheck,
        title: "Customer Service",
        description: "Dedicated In-House service team for hassle free experience, dedicated service Email to raise the service requests and dedicated and trained team to attend your service requests."
      },
      {
        icon: faDraftingCompass,
        title: "Raw Material",
        description: "E0-Grade : This eco-friendly board meets strict formaldehyde emission and zero-emission standards, featuring an antibacterial coating for added safety. Designed to minimize emissions, it combines durability with water and fire resistance, making it an ideal choice for environmentally conscious construction materials."
      },
    ];
    
    return (
      <div className={styles.homeServices}>
        <div className='container container-custom'>
        <SectionTitle title="Why Us" color="#ffcc00"></SectionTitle>
        <h2 className={styles.h2}>
         Everyday Living:  {" "}
                  <strong className={styles.strong}>  Quality Craftsmanship, </strong> Affordable Luxury
                </h2>
        <div className="container">
          <div className="row m-0">
            {data.map((item, index) => (
              <div className="col-sm-12 pt-3 mt-5" key={index}>
                <div className="row">
                  <div className="col-sm-1">
                    <FontAwesomeIcon width={48} className={styles.icon} icon={item.icon}></FontAwesomeIcon>
                  </div>
                  <div className="col-sm-11">
                    <div className={styles.title}> {item.title}</div>
                    <div className={styles.description}>{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
       
          </div>
        </div>
      </div>
      </div>
    );
}
export default AboutWhyus;