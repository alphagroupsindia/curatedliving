import ALL_URL from "@/app/apiConfig";
import Styles from "./TagManager.module.css";
import TagDisplayCount from "./TagDisplayCount";

async function getTags() {
  try {
    const res = await fetch(
      ALL_URL.api_url + "tx_newstag/newscount",
      { next: { revalidate: ALL_URL.cache_timeout } }
    );
    const data = await res.json();
    return { data };
  } catch (error) {
    return {};
  }
}

async function TagBoard(prop) {
  const { data } = await getTags();
  return <></>;

  // return (
  //   <div className={Styles.tagBoard}>
  //     <h5 className={Styles.h5}>Tags</h5>
  //     <hr></hr>
  //     {data.map((item) => (
  //       <TagDisplayCount key={item.tagid} data={item} from={prop.from}></TagDisplayCount>
        
  //     ))}
  //   </div>
  // );
}

export default TagBoard;
