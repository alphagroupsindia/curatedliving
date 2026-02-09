import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./WhatsappButton.module.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatssappButton = (props) => {
  return (
    <div className={Styles.wrapper}>
      <a href={props.link && props.link} className={Styles[props.css]}>
        <FontAwesomeIcon icon={faWhatsapp} width={16} className={Styles.icon}></FontAwesomeIcon>  {props.text}
      </a>
    </div>
  );
};
export default WhatssappButton;
