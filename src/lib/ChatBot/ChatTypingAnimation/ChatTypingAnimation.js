import styles from './ChatTypingAnimation.module.css';

const ChatTypingAnimation = () => {
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
      <>
        {focus}
        <div className={styles.typing}>
          <div className={`${styles.dot} ${styles.dot1}`}></div>
          <div className={`${styles.dot} ${styles.dot2}`}></div>
          <div className={`${styles.dot} ${styles.dot3}`}></div>
        </div>
      </>
    );
}

export default ChatTypingAnimation;
