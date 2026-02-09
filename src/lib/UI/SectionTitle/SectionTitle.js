import Styles from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  const textColor = props.color ? props.color : "black";
  const lineHeight=props.line?props.line:"20px"
  const weight=props.weight?props.weight:"500"
  return (
    <div className={Styles.wrapper}>
      <h2
        className={Styles.title}
        style={{ color: textColor, lineHeight: lineHeight, fontWeight: weight }}
      >
        {props.title}
      </h2>
    </div>
  );
};
export default SectionTitle;
