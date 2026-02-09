import PhotoLightbox from "@/lib/UI/PhotoLightbox/PhotoLightbox";


import SectionHeading from "@/lib/UI/SectionHeading/SectionHeading";
import SectionText from "@/lib/UI/SectionText/SectionText";
import SectionTitle from "@/lib/UI/SectionTitle/SectionTitle";

const GalleryDisplay = () => {

  const galleryData = [
   
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/videos/1.mp4",
      thumb: "/gallery/thumb/video1.jpg",
      type:"video"
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/videos/2.mp4",
      thumb: "/gallery/thumb/video2.jpg",
      type:"video"
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/sofa/2.jpg",
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/sofa/4.jpg",
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/sofa/5.jpg",
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/sofa/6.jpg",
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/sofa/7.jpg",
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/sofa/8.jpg",
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/sofa/9.jpg",
    },
  
 
   
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/photos/(51).png",
      thumb: "/gallery/thumb/(51).jpg",
    },

    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/photos/(52).png",
      thumb: "/gallery/thumb/(52).jpg",
    },
   
    
   
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/photos/(60).png",
      thumb: "/gallery/thumb/(60).jpg",
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/photos/(61).png",
      thumb: "/gallery/thumb/(61).jpg",
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/photos/(62).png",
      thumb: "/gallery/thumb/(62).jpg",
    },
   
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/photos/(67).png",
      thumb: "/gallery/thumb/(67).jpg",
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/photos/(68).png",
      thumb: "/gallery/thumb/(68).jpg",
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/photos/(69).png",
      thumb: "/gallery/thumb/(69).jpg",
    },
    {
      filename: "Urban Retreat",
      title: "Urban Retreat",
      file: "/gallery/photos/(70).png",
      thumb: "/gallery/thumb/(70).jpg",
    },
   
    
  ];


  



  return (
    <div className="container">
     
      <PhotoLightbox
        lightbox={true}
        height="250"
        col="col-sm-4"
        heading={false}
        data={galleryData}
      ></PhotoLightbox>
      
    </div>
  );
};
export default GalleryDisplay;
