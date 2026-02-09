import Image from "next/image";
import styles from "./page.module.css";
import HeaderBar from "@/lib/Components/HeaderBar/HeaderBar";
import MySlider from "@/lib/Components/Home/MySlider/MySlider";
import ScrollToTop from "@/lib/Components/ScrollToTop/ScrollToTop";
import HomeAbout from "@/lib/Components/Home/HomeAbout/HomeAbout";
import HomeServices from "@/lib/Components/Home/HomeServices/HomeServices";
import HomeCounterStrip from '@/lib/Components/Home/HomeCounterStrip/HomeCounterStrip';
import Footer from "@/lib/Components/Footer/Footer";
import Testimonial from "@/lib/Components/Home/HomeTestimonial/HomeTestimonial";
import HomeLatestProjects from "@/lib/Components/Home/HomeLatestProjects/HomeLatestProjects";
import HomeClientsLogo from '@/lib/Components/Home/HomeClientsLogo/HomeClientsLogo';
import HomeBlogs from '@/lib/Components/Home/HomeBlogs/HomeBlogs';
import HomeProducts from "@/lib/Components/Home/HomeProducts/HomeProducts";
import EnquiryButton from "@/lib/Components/Enquiry/EnquiryButton/EnquiryButton";
import ChatFloatingButton from "@/lib/ChatBot/ChatFloatingButton/ChatFloatingButton";
import DisplayBanner from "@/lib/Components/DisplayBanner/DisplayBanner";


export default function Home() {
  return (
    <>
    <ChatFloatingButton></ChatFloatingButton>
      <HeaderBar></HeaderBar>
      <MySlider></MySlider>
      <DisplayBanner></DisplayBanner>
      <ScrollToTop></ScrollToTop>
      <HomeAbout></HomeAbout>
      <HomeServices></HomeServices>
      <HomeProducts></HomeProducts>
      <HomeCounterStrip></HomeCounterStrip>
      <Footer></Footer>
    </>
  );
}
