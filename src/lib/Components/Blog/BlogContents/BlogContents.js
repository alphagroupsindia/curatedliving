import TagDisplay from "../Tag/TagDisplay";
import NavHeader from "../../HeaderBar/HeaderBar";
import Styles from "./BlogContents.module.css";
import ALL_URL from "@/app/apiConfig";
import Footer from "@/lib/Components/Footer/Footer";
import HeaderBar from "../../HeaderBar/HeaderBar";
import EnquiryButton from "../../Enquiry/EnquiryButton/EnquiryButton";
const BlogContents = (prop) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateString = prop.data.dateofsubmit;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);
  const content = prop.data.contenttext.replace(/\/contents\//g, ALL_URL.image_url);


  return (
    <>
      <HeaderBar></HeaderBar>
      <EnquiryButton autoDuration={300}></EnquiryButton>
      <div className={Styles.blogContents}>
        <div className={`${Styles.container} mx-auto`}>
          {prop.data.tagList.map((tag) => (
            <TagDisplay key={tag.tagid} data={tag}></TagDisplay>
          ))}
          <h1 className={Styles.h1}>{prop.data.heading}</h1>
          <p className={Styles.description}>{prop.data.titledescription}</p>
          <hr className={Styles.hr}></hr>
          {<p className={Styles.date}>{formattedDate}</p>}
          <div className={Styles.imageWrapper}>
            <img
              src={ALL_URL.image_url + "news/" + prop.data.coverimage}
              className={`img-responsive ${Styles.blogImage}`}
              alt={prop.data.heading}
            ></img>
          </div>
          <div
            className={Styles.text}
            dangerouslySetInnerHTML={{ __html: content}}
          />

          <p className={Styles.twelve}>{prop.data.message}</p>
        </div>
        <div className={Styles.wrapper}></div>
        <Footer></Footer>
      </div>
    </>
  );
};
export default BlogContents;
