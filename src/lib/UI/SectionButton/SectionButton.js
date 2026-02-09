"use client";
import React, { useEffect, useState } from "react";
import Styles from "./SectionButton.module.css";

const SectionButton = (props) => {
  const { auto, autoDuration, button, ButtonTrigger, link, text } = props;
  const [autoTriggered, setAutoTriggered] = useState(false);

  useEffect(() => {
    // Only set up the timer if auto is true, ButtonTrigger is a function, and the action hasn't been triggered yet
    if (
      auto &&
      button &&
      typeof ButtonTrigger === "function" &&
      !autoTriggered &&
      autoDuration > 0
    ) {
      const timer = setTimeout(() => {
        ButtonTrigger();
        setAutoTriggered(true); // Set the triggered state to true after triggering
      }, autoDuration * 1000);

      return () => clearTimeout(timer);
    }
  }, [auto, autoDuration, button, ButtonTrigger, autoTriggered]);

  return (
    <div className={Styles.wrapper}>
      {button ? (
        <button
          onClick={() => {
            ButtonTrigger();
          }}
          className={Styles.button}
        >
          {text}
        </button>
      ) : (
        <a href={link} className={Styles.button}>
          {text}
        </a>
      )}
    </div>
  );
};

export default SectionButton;
