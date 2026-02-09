import Link from "next/link";
import Styles from "./Blog.module.css";
import ALL_URL from "@/app/apiConfig";

const BlogThumbSmall = (prop) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(prop.data.date);
  const formattedDate = date.toLocaleDateString("en-US", options);
  const heading = prop.data.heading;
  const words = heading.split(" ");
  const altText = words.slice(0, 2).join(" ");
  return (
    <>
      <Link href={"blogs/"+prop.data.link} className={Styles.link}>
        <div className="mt-1">
          <div className="row">
            <div className="col-sm-8">
              <h5 className={Styles.h5}>{prop.data.heading}</h5>
              <p className={Styles.p}>{prop.data.description}</p>
              <p className={Styles.date}>{formattedDate}</p>
            </div>
            <div className="col-sm-4">
              <div className={Styles.imageHolderSmall}>
                <img
                  src={
                    ALL_URL.image_url +"news/" +
                    prop.data.coverimage
                  }
                  alt={altText}
                  className={`img-responsive ${Styles.blogImage}`}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default BlogThumbSmall;
