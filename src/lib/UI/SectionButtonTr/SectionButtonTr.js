import Styles from "./SectionButtonTr.module.css";

const SectionButtonTr = (props) => {
  return (
    <div className={Styles.wrapper}>
      <a href={props.link && props.link} className={Styles.button}>
        {props.text}
      </a>
    </div>
  );
};
export default SectionButtonTr;
