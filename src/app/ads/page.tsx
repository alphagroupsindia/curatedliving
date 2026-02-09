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
import EnquiryClient from "@/lib/Components/Enquiry/EnquiryClient/EnquiryClient";
import Script from "next/script";
import ChatFloatingButton from "@/lib/ChatBot/ChatFloatingButton/ChatFloatingButton";

export default function Home() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16565888998"
      ></Script>
      <Script id="googletag">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-16565888998');
    `}
      </Script>
      <HeaderBar></HeaderBar>
      <MySlider></MySlider>
      <ScrollToTop></ScrollToTop>
      <HomeAbout></HomeAbout>
      <HomeServices></HomeServices>
      <HomeProducts></HomeProducts>
      <HomeCounterStrip></HomeCounterStrip>
      <ChatFloatingButton autoOpen={true}></ChatFloatingButton>
       <EnquiryClient></EnquiryClient>
      <Footer></Footer>
    </>
  );
}
