import Link from "next/link";
import Styles from "./Blog.module.css";
import ALL_URL from "@/app/apiConfig";

const BlogThumbTiny = (prop) => {
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
          <div className="col-sm-6">
              <div className={Styles.imageHolderTiny}>
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
            <div className="col-sm-12">
              <div className={Styles.tinyHeading}>{prop.data.heading}</div>
            </div>
       
          </div>
        </div>
      </Link>
    </>
  );
};
export default BlogThumbTiny;
