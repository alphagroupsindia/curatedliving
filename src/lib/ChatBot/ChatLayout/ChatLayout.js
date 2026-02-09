"use client"
import styles from './ChatLayout.module.css';
import Image from 'next/image';
import logo from './logo.png';
import ChatEngine from '../ChatEngine/ChatEngine';
import { useEffect, useRef } from "react";

const ChatLayout = ({closeChat}) => {
  const scrollableDivRef = useRef(null);

  useEffect(() => {
    // Function to scroll the div to the end
    function scrollToBottom() {
      // Get reference to the scrollable div
      const div = scrollableDivRef.current;
      // Scroll the div to the bottom
      if (div) {
        div.scrollTo(0, div.scrollHeight);
      }
    }

    // Call the function to scroll the div to the end
    scrollToBottom();
  }, []);
  return (
    <>
    <div className={styles.chatLayout}  >
      <div className={styles.headerBar}>
        <div className="row p-3">
          <div className="col-4">
            <Image width={75} src={logo}></Image>
          </div>
          <div className={`${styles.logoText} col-6 pt-2`}>Curated Living</div>
          <div className={`${styles.closeButtonWrap} col-2 pt-2 mr-2`}>
          <button className={styles.closeButton} onClick={closeChat}>X</button>

          </div>
        </div>
      </div>
      <div className={styles.chatEngine}>
        <ChatEngine></ChatEngine>
      </div>
    </div></>);
}

export default ChatLayout;
