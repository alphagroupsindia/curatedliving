import Styles from './TagManager.module.css';
const TagDisplay=(prop)=>{
    return<></>
    return (
      <>
        <a
          className={Styles.link}
          href={"../tag/" + prop.data.tag.toLowerCase().replace(/\s+/g, "-")}
        >
          <p key={prop.data.tagid} className={Styles.pinkTag}>
            {prop.data.tag}
          </p>
        </a>
      </>
    );

}

export default TagDisplay;