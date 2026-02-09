import Styles from "./TagManager.module.css";

const TagDisplayCount = (prop) => {
  const permalink = prop.data.tag.toLowerCase().replace(/\s+/g, '-');
  const href = prop.from=='tag' ? permalink : 'tag/' + permalink;
  return (
    <>
      <a className={Styles.link} href={href}>
        <div className={Styles.tag} key={prop.data.tagid}>
          {prop.data.tag} ({prop.data.newsCount})
        </div>
      </a>
    </>
  );
};

export default TagDisplayCount;
