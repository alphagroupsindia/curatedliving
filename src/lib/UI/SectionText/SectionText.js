import Styles from "./SectionText.module.css";

const SectionText = (props) => {
  const textColor = props.color ? props.color : "black";
  const weight =props.weight?props.weight:"400";
  const size =props.size?props.size:"20";
  const line =props.line?props.line:"40";
  return (
    <div className={Styles.wrapper}>
      <h2
        className={Styles.text}
        style={{ color: textColor, fontWeight: weight, fontSize: size + "px", lineHeight:line+"px" }}
      >
        {props.text}  {props.childern}
      </h2>
    </div>
  );
};
export default SectionText;
