import Styles from "./SectionTitleBorder.module.css";

const SectionTitleBorder = (props) => {
  const textColor = props.color ? props.color : "black";
  return (
    <div className={Styles.wrapper}>
    
      <h2
        className={Styles.title}
        style={{ color: textColor, border: "1px solid " + textColor }}
      >
        {props.title}
      </h2>
    </div>
  );
};
export default SectionTitleBorder;
