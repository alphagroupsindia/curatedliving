import Footer from "@/lib/Components/Footer/Footer";
import NavHeader from "@/lib/Components/HeaderBar/HeaderBar";
import PageHeader from "@/lib/UI/PageHeader/PageHeader";
import ContactUs from "@/lib/Components/Contact/ContactUs/ContactUs";
import HomeClientsLogo from "@/lib/Components/Home/HomeClientsLogo/HomeClientsLogo";
import AboutUs from '@/lib/Components/About/AboutUs/AboutUs';
import DesignDisplay from "@/lib/Components/Design/DesignDisplay/DesignDisplay";
import GalleryDisplay from '@/lib/Components/Gallery/GalleryDisplay/GalleryDisplay';
import EnquiryButton from "@/lib/Components/Enquiry/EnquiryButton/EnquiryButton";
import ProjectsDisplay from '@/lib/Components/Projects/ProjectsDisplay/ProjectsDisplay';

function Permalink(param: any) {
  const permalink = param.params.permalink.toLowerCase();
  let retValue: JSX.Element | null = null;
  switch (permalink) {
    case "about-us":
      return (
        <>
          <NavHeader></NavHeader>
          <AboutUs></AboutUs>  
          {/* <HomeClientsLogo></HomeClientsLogo> */}
          <Footer></Footer>
        </>
      );
    case "projects":
      return (
        <>
          <NavHeader></NavHeader>
          <PageHeader
            color="rgb(240,240,240)"
            title="Projects"
            bread="Home:Projects"
            img="images/university-bg.png"
            message1="Everything is designed."
            sign={true}
            message2="It’s just that few things are designed well."
          ></PageHeader>
          <ProjectsDisplay></ProjectsDisplay>
          <Footer></Footer>
        </>
      );
      case "gallery":
        return (
          <>
            <NavHeader></NavHeader>
            <PageHeader
              color="rgb(240,240,240)"
              title="Gallery"
              bread="Home:Gallery"
              img="images/products.jpg"
            ></PageHeader>
            <GalleryDisplay></GalleryDisplay>
            <Footer></Footer>
          </>
        );
    case "designs":
      return (
        <>
          <NavHeader></NavHeader>
          <PageHeader
            color="rgb(240,240,240)"
            title="Designs"
            bread="Home:Designs"
            img="images/products.jpg"
          ></PageHeader>
           <DesignDisplay></DesignDisplay>
          <Footer></Footer>
        </>
      );
    case "contact-us":
      return (
        <>
          <NavHeader ></NavHeader>
          <ContactUs></ContactUs>
          <Footer></Footer>
        </>
      );
    
    default:
  }

  if (retValue) {
    return retValue;
  }
}

export default Permalink;
