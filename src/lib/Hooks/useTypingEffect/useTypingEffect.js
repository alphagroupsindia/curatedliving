import { useState, useEffect } from "react";

const useTypingEffect = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText(""); // Reset the displayed text when text changes
    setIndex(0); // Reset the index as well
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeoutId); // Cleanup timeout
    }
  }, [text, index, speed]);

  return displayedText;
};
export default useTypingEffect;

