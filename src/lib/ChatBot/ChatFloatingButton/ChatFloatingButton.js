"use client"
import ChatLayout from '../ChatLayout/ChatLayout';
import styles from './ChatFloatingButton.module.css';
import Image from 'next/image';

import React, { useEffect, useState } from 'react';

const ChatFloatingButton = ({ autoOpen = false }) => {
  const [bounce, setBounce] = useState(true);
  const [chatON, setChatON] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBounce(false);
    }, 4000); // Stop bouncing after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (autoOpen) {
      const openTimer = setTimeout(() => {
        setChatON(true);
      }, 2000); // Open chat after 10 seconds if autoOpen is true

      return () => clearTimeout(openTimer);
    }
  }, [autoOpen]);

  const handleClick = () => {
    setBounce(false);
    setChatON(!chatON);
  };

  const closeChat = () => {
    setChatON(false);
  };

  return (
    <>
      {!chatON ? (
        <button
          className={`${styles.chatButton} ${bounce ? styles.bounceOnce : ""}`}
          onClick={handleClick}
        >
          How can I help you?
        </button>
      ) : (
        <>
          <ChatLayout closeChat={closeChat} />
          <button
            className={`${styles.chatButton} ${styles.closeBg} ${styles.closeButton}`}
            onClick={handleClick}
          >
            X
          </button>
        </>
      )}
    </>
  );
};

export default ChatFloatingButton;
