import React, { useState, useEffect } from 'react';
import styles from './ChatTextBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatTextBox = ({ placeholder, regex, onSend, textmode }) => {
  const [value, setValue] = useState('');
  const [displayInput, setDisplayInput] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayInput(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (error && regex instanceof RegExp && !regex.test(newValue)) {
      setError("Invalid");
    } else {
      setError("");
    }
    
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default behavior of new line
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (value.trim() !== '' && (!regex || (regex instanceof RegExp && regex.test(value)))) {
      onSend(value);
      setValue('');
      setError('');
    } else {
      setError('Invalid');
    }
  };

  const focus = (
    <input
      id="textInput"
      type="text"
      placeholder="Enter your name"
      autoFocus
      readOnly={true}
      className={styles.noShow}
    />
  );

  return (
    <div>
      {!displayInput && <>{focus}</>}
      {displayInput && (
        <div className={styles.inputWrap}>
          {placeholder === "THANK" ? (
            <>Close Button</>
          ) : (
            <>
              <input
                type={textmode}
                placeholder={placeholder}
                value={value}
                className={`${styles.inputBox} ${error&&styles.errorBorder}`} 
                onChange={handleChange}
                autoFocus
                onKeyDown={handleKeyDown}
              />
              <button className={`${styles.button}`} onClick={sendMessage}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
              {error && <div className={styles.error}>{error}</div>}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatTextBox;
