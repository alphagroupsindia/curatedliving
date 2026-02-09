import PhotoLightbox from "@/lib/UI/PhotoLightbox/PhotoLightbox";


import SectionHeading from "@/lib/UI/SectionHeading/SectionHeading";
import SectionText from "@/lib/UI/SectionText/SectionText";
import SectionTitle from "@/lib/UI/SectionTitle/SectionTitle";

const ProjectsDisplay = () => {

  const mysore1 = [
    {
      title: "Kitchen",
      file: "/projects/mysore-1/kitchen1.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-1/kitchen2.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-1/kitchen3.jpeg",
    },
  ];
  const mysore2 = [
    {
      title: "Kitchen",
      file: "/projects/mysore-2/kitchen1.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-2/kitchen2.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-2/kitchen3.jpeg",
    },
  ];
  const mysore3 = [
    {
      title: "Kitchen",
      file: "/projects/mysore-3/kitchen1.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-3/kitchen2.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-3/kitchen3.jpeg",
    },
    {
      filename: "Kitchen1",
      title: "Kitchen",
      file: "/projects/mysore-3/kitchen4.jpeg",
    },
    {
      filename: "Kitchen1",
      title: "Kitchen",
      file: "/projects/mysore-3/kitchen5.jpeg",
    },
  ];
  const mysore4 = [
    {
      title: "Kitchen",
      file: "/projects/mysore-4/kitchen1.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-4/kitchen2.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-4/kitchen3.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-4/kitchen4.jpeg",
    },
    {
      filename: "Kitchen1",
      title: "Kitchen",
      file: "/projects/mysore-4/kitchen5.jpeg",
    },
    {
      title: "TV Unit",
      file: "/projects/mysore-4/tv.jpeg",
    },
    {
      title: "Pooja Unit",
      file: "/projects/mysore-4/pooja-unit.jpeg",
    },
    {
      title: "Utility",
      file: "/projects/mysore-4/utility.jpeg",
    },
    {
      title: "Crockery Unit",
      file: "/projects/mysore-4/crockery-unit.jpeg",
    },
    {
      title: "Crockery Unit",
      file: "/projects/mysore-4/crockery-unit2.jpeg",
    },
  ];

  const mysore5 = [
    {
      title: "Kitchen",
      file: "/projects/mysore-5/1.jpg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-5/2.jpg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-5/3.jpg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-5/4.jpg",
    },
    {
      filename: "Kitchen",
      title: "Kitchen",
      file: "/projects/mysore-5/5.jpg",
    },
    {
      filename: "Kitchen",
      title: "Kitchen",
      file: "/projects/mysore-5/6.jpg",
    },
    {
      filename: "Kitchen",
      title: "Kitchen",
      file: "/projects/mysore-5/7.jpg",
    },
    {
      filename: "Kitchen",
      title: "Kitchen",
      file: "/projects/mysore-5/8.jpg",
    },
    {
      filename: "Kitchen",
      title: "Kitchen",
      file: "/projects/mysore-5/9.jpg",
    },
  ];
  const mysore6 = [
    {
      title: "Kitchen",
      file: "/projects/mysore-6/1.jpg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-6/2.jpg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-6/3.jpg",
    },
  ];
  const mysore7 = [
    {
      title: "Kitchen",
      file: "/projects/mysore-7/1.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-7/2.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-7/4.jpeg",
    },
    {
      title: "Wardrobe",
      file: "/projects/mysore-7/4.jpeg",
    },
  ];
  const mysore8 = [
    {
      title: "Kitchen",
      file: "/projects/mysore-8/1.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-8/2.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-8/3.jpeg",
    },
    {
      title: "",
      file: "/projects/mysore-8/4.jpeg",
    },
    {
      title: "Wardrobe",
      file: "/projects/mysore-8/5.jpg",
    },
  ];
  const mysore9 = [
    {
      title: "Kid's Room",
      file: "/projects/mysore-9/1.jpg",
    },
    {
      title: "Kid's room",
      file: "/projects/mysore-9/2.jpg",
    },
    {
      title: "Wardrobe",
      file: "/projects/mysore-9/3.jpg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-9/4.jpg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-9/5.jpg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-9/6.jpg",
    },
    {
      title: "Kitchen",
      file: "/projects/mysore-9/7.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-9/8.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-9/9.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-9/10.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-9/11.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-9/12.jpg",
    },
  ];


  const mysore10 = [
    {
      title: "",
      file: "/projects/mysore-10/1.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/2.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/3.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/4.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/5.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/6.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/7.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/8.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/9.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/10.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/11.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/12.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/13.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-10/14.jpg",
    },
  ];

  
  const mysore11 = [
    {
      title: "",
      file: "/projects/mysore-11/1.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/2.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/3.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/4.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/5.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/6.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/7.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/8.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/9.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/10.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/11.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/12.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/13.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/14.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/15.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/16.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/17.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/18.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/19.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/20.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/21.jpg",
    },
    {
      title: "",
      file: "/projects/mysore-11/22.jpg",
    },
  ];


  const bangalore1 = [
    {
      title: "Kitchen",
      file: "/projects/bangalore-1/kitchen1.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/bangalore-1/kitchen2.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/bangalore-1/kitchen3.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/bangalore-1/kitchen4.jpeg",
    },
    {
      filename: "Kitchen",
      title: "Kitchen",
      file: "/projects/bangalore-1/kitchen5.jpeg",
    },
    {
      title: "Wardrobe",
      file: "/projects/bangalore-1/wardrobe1.jpeg",
    },
    {
      title: "Wardrobe",
      file: "/projects/bangalore-1/wardrobe2.jpeg",
    },
    {
      title: "Wardrobe",
      file: "/projects/bangalore-1/wardrobe3.jpeg",
    },
    {
      title: "Wardrobe",
      file: "/projects/bangalore-1/wardrobe4.jpeg",
    },
    {
      title: "Bedroom",
      file: "/projects/bangalore-1/bedroom1.jpeg",
    },
    {
      title: "Bedroom TV Unit",
      file: "/projects/bangalore-1/bedroom2.jpeg",
    },
    {
      title: "TV Unit",
      file: "/projects/bangalore-1/tv1.jpeg",
    },
    {
      title: "TV Unit",
      file: "/projects/bangalore-1/tv2.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/bangalore-1/living1.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/bangalore-1/living2.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/bangalore-1/living3.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/bangalore-1/living4.jpeg",
    },
    {
      title: "Wall Panelling - Living Room",
      file: "/projects/bangalore-1/living5.jpeg",
    },
    {
      title: "Dining Console",
      file: "/projects/bangalore-1/dining-console.jpeg",
    },
    {
      title: "Dresser",
      file: "/projects/bangalore-1/dresser.jpeg",
    },
    {
      title: "Shoe Rack",
      file: "/projects/bangalore-1/shoe-rack1.jpeg",
    },
    {
      title: "Shoe Rack",
      file: "/projects/bangalore-1/shoe-rack2.jpeg",
    },
    {
      title: "Study Unit",
      file: "/projects/bangalore-1/study-unit.jpeg",
    },
  ];
  const ooty = [
    {
      title: "Kitchen",
      file: "/projects/ooty/kitchen1.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/ooty/kitchen2.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/ooty/kitchen3.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/ooty/kitchen4.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/ooty/kitchen5.jpeg",
    },
    {
      title: "Kitchen",
      file: "/projects/ooty/kitchen6.jpeg",
    },
    {
      title: "Bedroom",
      file: "/projects/ooty/bedroom1.jpeg",
    },
    {
      title: "Bedroom",
      file: "/projects/ooty/bedroom8.jpeg",
    },
    {
      title: "Bedroom",
      file: "/projects/ooty/bedroom9.jpeg",
    },
    {
      title: "Bedroom",
      file: "/projects/ooty/bedroom4.jpeg",
    },
    {
      title: "Wardrobe",
      file: "/projects/ooty/wardrobe1.jpeg",
    },
    {
      title: "Wardrobe",
      file: "/projects/ooty/wardrobe2.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room1.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room2.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room3.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room4.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room5.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room6.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room7.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room8.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room9.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room10.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room11.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room12.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room13.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room14.jpeg",
    },
    {
      title: "Living Room",
      file: "/projects/ooty/living-room14.jpeg",
    },
    {
      title: "Vanity",
      file: "/projects/ooty/vanity1.jpeg",
    },
    {
      title: "Vanity",
      file: "/projects/ooty/vanity2.jpeg",
    },
    {
      title: "Vanity",
      file: "/projects/ooty/vanity3.jpeg",
    },
    
    {
      title: "Vanity",
      file: "/projects/ooty/vanity5.jpeg",
    },
    {
      title: "Wall Panelling",
      file: "/projects/ooty/others1.jpeg",
    },
    {
      title: "Custom Designed Bookshelf",
      file: "/projects/ooty/others2.jpeg",
    },
    {
      title: "Custom Designed Furniture",
      file: "/projects/ooty/others3.jpeg",
    },
    {
      title: "Custom Designed Furniture",
      file: "/projects/ooty/others4.jpeg",
    },
    {
      title: "Others",
      file: "/projects/ooty/others5.jpeg",
    },
    {
      title: "Others",
      file: "/projects/ooty/others6.jpeg",
    },
    {
      title: "Others",
      file: "/projects/ooty/others7.jpeg",
    },
  
   
  ];
  return (
    <div className="container">
      <span id="tv-units"></span>
      <SectionHeading
        bottom="20px"
        color="#ffcc00"
        line="35px"
        heading="Projects Executed @ Mysuru"
      ></SectionHeading>
      <SectionTitle title="PROJECT 1" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="250"
        col="col-sm-3"
        title={true}      
        data={mysore1}
      ></PhotoLightbox>

      <SectionTitle title="PROJECT 2" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="250"
        col="col-sm-3"
        title={true}      
        data={mysore2}
      ></PhotoLightbox>
      <SectionTitle title="PROJECT 3" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="220"
        col="col-sm-3"
        scroll={true}
        show={4}
        title={true}      
        data={mysore3}
      ></PhotoLightbox>
      <SectionTitle title="PROJECT 4" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="250"
        scroll={true}
        show={4}
        col="col-sm-3"
        title={true}  
        
        data={mysore4}
      ></PhotoLightbox>
      <SectionTitle title="PROJECT 5" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="250"
        scroll={true}
        show={4}
        col="col-sm-3"
        title={true}  
        
        data={mysore5}
      ></PhotoLightbox>
      <SectionTitle title="PROJECT 6" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="150"
        scroll={false}
        show={4}
        col="col-sm-3"
        title={true}  
        data={mysore6}
      ></PhotoLightbox>
        <SectionTitle title="PROJECT 7" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="240"
        scroll={false}
        show={4}
        col="col-sm-3"
        title={true}  
        data={mysore7}
      ></PhotoLightbox>
        <SectionTitle title="PROJECT 8" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="220"
        scroll={false}
        show={4}
        col="col-sm-3"
        title={true}  
        data={mysore8}
      ></PhotoLightbox>
          <SectionTitle title="PROJECT 9" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="220"
        scroll={false}
        show={4}
        col="col-sm-3"
        title={true}  
        data={mysore9}
      ></PhotoLightbox>
      <SectionTitle title="PROJECT 10" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="220"
        scroll={false}
        show={4}
        col="col-sm-3"
        title={true}  
        data={mysore10}
      ></PhotoLightbox>
      <SectionTitle title="PROJECT 11" color="#ffcc00"></SectionTitle>
      <PhotoLightbox
        lightbox={true}
        height="220"
        scroll={false}
        show={4}
        col="col-sm-3"
        title={true}  
        data={mysore11}
      ></PhotoLightbox>
      <SectionHeading
        top="40px"
        bottom="20px"
        line="35px"
        color="#ffcc00"
        heading="Projects Executed @ Bengaluru"
      ></SectionHeading>
      <PhotoLightbox
        lightbox={true}
        height="235"
        scroll={true}
        show={4}
        col="col-sm-3"
        title={true}      
        data={bangalore1}
      ></PhotoLightbox>
       <SectionHeading
        top="40px"
        bottom="20px"
        line="35px"
        color="#ffcc00"
        heading="Projects Executed @ Ooty"
      ></SectionHeading>
      <PhotoLightbox
        lightbox={true}
        height="235"
        scroll={true}
        show={4}
        col="col-sm-3"
        title={true}  
        data={ooty}
      ></PhotoLightbox>
    </div>
  );
};
export default ProjectsDisplay;
