import Styles from "./ChatOptionButton.module.css";

const ChatOptionButton = ({ buttonText, onClick, settings }) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className={Styles.wrapper}>
      <button
        className={`${Styles.button}  ${
          settings === "WHATSAPP" ? Styles.whatsApp : ""
        }`}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};
export default ChatOptionButton;
