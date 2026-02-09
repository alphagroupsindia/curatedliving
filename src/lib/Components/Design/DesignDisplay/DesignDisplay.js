import PhotoLightbox from "@/lib/UI/PhotoLightbox/PhotoLightbox";


import SectionHeading from "@/lib/UI/SectionHeading/SectionHeading";
import SectionText from "@/lib/UI/SectionText/SectionText";
import SectionTitle from "@/lib/UI/SectionTitle/SectionTitle";

const DesignDisplay = () => {

  const kitchenTitanData = [
    {
      filename: "Kitchens Titan",
      title: "Kitchens Titan",
      file: '/designs/kitchens_titan_01.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/kitchens_titan_02.jpg',
    },
    {
      filename: "3.webp",
      title: "",
      file: '/designs/kitchens_titan_03.jpg',
    },
  ];
  const kitchenCubolgyData = [
    {
      filename: "Kitchens Titan",
      title: "Kitchens Titan",
      file: '/designs/kitchens_cubolgy_01.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/kitchens_cubolgy_02.jpg',
    },
    {
      filename: "3.webp",
      title: "",
      file: '/designs/kitchens_cubolgy_03.jpg',
    },
    {
      filename: "3.webp",
      title: "",
      file: '/designs/kitchens_cubolgy_04.jpg',
    },
    {
      filename: "3.webp",
      title: "",
      file: '/designs/kitchens_cubolgy_05.jpg',
    },
    {
      filename: "3.webp",
      title: "",
      file: '/designs/kitchens_cubolgy_06.jpg',
    },
    {
      filename: "3.webp",
      title: "",
      file: '/designs/kitchens_cubolgy_07.jpg',
    },
  ];
  const kitchenVelvetData = [
    {
      filename: "Kitchens Titan",
      title: "Kitchens Titan",
      file: '/designs/kitchens_velvet_01.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/kitchens_velvet_02.jpg',
    },
    {
      filename: "3.webp",
      title: "",
      file: '/designs/kitchens_velvet_03.jpg',
    },
  ];

  const kitchenEndlessData = [
    {
      filename: "Kitchens Titan",
      title: "Kitchens Titan",
      file: '/designs/kitchens_endless_01.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/kitchens_endless_02.jpg',
    },
  ];

  const kitchenLinearData = [
    {
      filename: "Kitchens Titan",
      title: "Kitchens Titan",
      file: '/designs/kitchens_linear_01.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/kitchens_linear_02.jpg',
    },
   
  ];
  const wardrobeData = [
    {
      filename: "2.webp",
      title: "",
      file: '/designs/wardrobes_13.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/wardrobes_12.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/wardrobes_11.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/wardrobes_10.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/wardrobes_09.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/wardrobes_08.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/wardrobes_07.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/wardrobes_06.jpg',
    },
    {
      filename: "Kitchens Titan",
      title: "Kitchens Titan",
      file: '/designs/wardrobes_01.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/wardrobes_02.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/wardrobes_03.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/wardrobes_04.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/wardrobes_05.jpg',
    },
    
   
  ];
  const tvUnitData = [
    {
      filename: "Kitchens Titan",
      title: "Kitchens Titan",
      file: '/designs/tv_units_01.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/tv_units_02.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/tv_units_03.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/tv_units_04.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/tv_units_05.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/tv_units_06.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/tv_units_07.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/tv_units_08.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/tv_units_09.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/tv_units_10.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/tv_units_11.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/tv_units_12.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/tv_units_13.jpg',
    },
   
  ];

  const consoleData = [
    {
      filename: "Kitchens Titan",
      title: "Kitchens Titan",
      file: '/designs/console_1.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/console_2.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/console_3.jpg',
    },
    {
      filename: "2.webp",
      title: "",
      file: '/designs/console_4.jpg',
    },
   
  ];

  const crockeryData = [
    {
      filename: "Kitchens Titan",
      title: "Kitchens Titan",
      file: '/designs/crockery_1.jpg',
    },
   
  ];

  const studyData = [
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/study_1.jpg',
    },
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/study_2.jpg',
    },
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/study_3.jpg',
    },
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/study_4.jpg',
    },
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/study_5.jpg',
    },
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/study_6.jpg',
    },
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/study_7.jpg',
    },
  ];

  const tvStudyData = [
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/tv_study_1.jpg',
    },
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/tv_study_2.jpg',
    },
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/tv_study_3.jpg',
    },
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/tv_study_4.jpg',
    },
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/tv_study_5.jpg',
    },
    {
      filename: "Study Unit",
      title: "Study Unit",
      file: '/designs/tv_study_6.jpg',
    },
   
  ];

  



  return (
    <div className="container">
      <SectionHeading
        top="40"
        bottom="20"
        color="#ffcc00"
        heading="Kitchens"
      ></SectionHeading>
      <SectionText
        color="rgb(150,150,150)"
        text="Unleash culinary creativity in a kitchen that’s more than a space—it’s a masterpiece. Our kitchen collections redefine the heart of your home, seamlessly blending innovation with design. Elevate your cooking experience and turn every meal into a celebration. Discover a symphony of style and functionality, where every detail is a testament to the art of living."
      ></SectionText>
      <SectionTitle title="Titan" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="250"
        col="col-sm-4"
        heading={false}
        data={kitchenTitanData}
      ></PhotoLightbox>
      <SectionTitle title="Cubolgy" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="250"
        col="col-sm-4"
        heading={false}
        data={kitchenCubolgyData}
      ></PhotoLightbox>
      <SectionTitle title="Velvet" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="250"
        col="col-sm-4"
        heading={false}
        data={kitchenVelvetData}
      ></PhotoLightbox>
      <SectionTitle title="Endless" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="350"
        col="col-sm-6"
        heading={false}
        data={kitchenEndlessData}
      ></PhotoLightbox>
      <SectionTitle title="Linear" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="350"
        col="col-sm-6"
        heading={false}
        data={kitchenLinearData}
      ></PhotoLightbox>

      <span id="wardrobe"></span>
      <SectionHeading
        top="40px"
        bottom="20px"
        color="#ffcc00"
        heading="Wardrobes"
      ></SectionHeading>
      <SectionText
        color="rgb(150,150,150)"
        text="Step into a realm of organized opulence with our wardrobes – where fashion meets function, and your personal style finds its sanctuary. Immerse yourself in the allure of curated elegance as our meticulously crafted wardrobes redefine storage solutions. Elevate your space, elevate your wardrobe – because your garments deserve a home as stylish as they are."
      ></SectionText>
      <PhotoLightbox
        lightbox={true}
        height="250"
        col="col-sm-4"
        heading={false}
        data={wardrobeData}
      ></PhotoLightbox>

<SectionHeading
        top="40px"
        bottom="20px"
        color="#ffcc00"
        heading="Console Unit"
      ></SectionHeading>
      <SectionText
        color="rgb(150,150,150)"
        text="Discover the perfect blend of form and function with our designer console unit. Elevate your home décor and enjoy the seamless combination of elegance and practicality. Meanwhile, thoughtfully designed compartments and drawers offer discreet storage for everyday essentials, keeping clutter at bay and maintaining a clean and minimalistic appearance."
      ></SectionText>
      <SectionText
        color="rgb(150,150,150)"
        text="A console unit that embodies both functionality and aesthetic grace—a piece of furniture that not only enhances your living space but also serves as a versatile hub for organization and display."
      ></SectionText>

<PhotoLightbox
        lightbox={true}
        height="250"
        col="col-sm-4"
        heading={false}
        data={consoleData}
      ></PhotoLightbox>

<SectionHeading
        top="40px"
        bottom="20px"
        color="#ffcc00"
        heading="Crockery Unit"
      ></SectionHeading>
<SectionText
        color="rgb(150,150,150)"
        text="Experience the perfect blend of style and functionality with our designed crockery unit. Add the masterpiece to your home today and enjoy the timeless beauty and convenience it brings."
      ></SectionText>
      <SectionText
        color="rgb(150,150,150)"
        text="It’s not just a storage space; it’s a living canvas, where functionality meets artistry in a seamless symphony of style."
      ></SectionText>

<PhotoLightbox
        lightbox={true}
        height="250"
        col="col-sm-4"
        heading={false}
        data={crockeryData}
      ></PhotoLightbox>


<SectionHeading
        top="40px"
        bottom="20px"
        color="#ffcc00"
        heading="Study Unit"
      ></SectionHeading>

<SectionText
        color="rgb(150,150,150)"
        text="Experience the convenience of a transformed study unit that seamlessly integrates with your lifestyle, enhancing productivity and relaxation. We understand the importance of creating spaces that are both functional and visually appealing. Our modern study unit is designed to seamlessly integrate into your home, providing a dedicated workspace that inspires productivity while enhancing your interior decor."
      ></SectionText>


<PhotoLightbox
        lightbox={true}
        height="250"
        col="col-sm-4"
        heading={false}
        data={studyData}
      ></PhotoLightbox>

<SectionHeading
        top="40px"
        bottom="20px"
        color="#ffcc00"
        heading="TV Cum Study Unit"
      ></SectionHeading>

<SectionText
        color="rgb(150,150,150)"
        text="Elevate your living space with our versatile tv cum study unit, crafted with the elegance and sophistication of design. The unit serves as a sanctuary where productivity meets relaxation, embodying the essence of contemporary living."
      ></SectionText>
      <SectionText
        color="rgb(150,150,150)"
        text="Efficient use of space is achieved through cleverly integrated storage solutions and ergonomic design considerations."
      ></SectionText>


<PhotoLightbox
        lightbox={true}
        height="250"
        col="col-sm-4"
        heading={false}
        data={tvStudyData}
      ></PhotoLightbox>

      <span id="tv-units"></span>
      <SectionHeading
        top="40px"
        bottom="20"
        color="#ffcc00"
        heading="TV Units"
      ></SectionHeading>
      <SectionText
        color="rgb(150,150,150)"
        text="Transform your living space with our TV units – where style meets functionality in a symphony of modern elegance. Elevate your entertainment experience and redefine the focal point of your home with our uniquely crafted TV units, designed to seamlessly blend aesthetics and innovation. Discover a new dimension of sophistication for your screen time."
      ></SectionText>
      <PhotoLightbox
        lightbox={true}
        height="250"
        col="col-sm-4"
        heading={false}
        data={tvUnitData}
      ></PhotoLightbox>

<span id="commercial-spaces"></span>
      <SectionHeading
        top="80px"
        bottom="0px"
        color="#ffcc00"
        line="40px"
        heading="Commercial Spaces"
      ></SectionHeading>
      <SectionText
        color="rgb(150,150,150)"
        text="At Curated Living, we specialize in creating inspiring and functional interior spaces for commercial clients. Functionality is of utmost importance when it comes to designing commercial spaces; we know what it takes to create one. With a passion for design excellence and a commitment to client satisfaction, we transform ordinary spaces into extraordinary experiences."
      ></SectionText>

<SectionText
        color="rgb(150,150,150)"
        text="Our mission is to deliver innovative and personalized interior design solutions that meet the unique needs and aspirations of our clients. We strive to exceed expectations by combining creativity, expertise, and attention to detail in every project we undertake."
      ></SectionText>

      <SectionHeading
        top="80px"
        bottom="0px"
        color="#ffcc00"
        line="40px"
        heading="Get ready to be captivated!"
      ></SectionHeading>
      <SectionText
        color="rgb(150,150,150)"
        text="Get ready to be captivated! We’re currently weaving together something extraordinary just for you. Stay tuned for the grand reveal—your anticipation will be worth the wait. Come back shortly to witness the magic unfold! "
      ></SectionText>
    </div>
  );
};
export default DesignDisplay;
