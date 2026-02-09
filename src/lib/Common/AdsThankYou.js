import SectionButton from '../UI/SectionButton/SectionButton';
import styles from './AdsThankYou.module.css'
const AdsThankYou=()=>{
    return (
      <div className="container">
        <div className="text-center">
          <div className={styles.thankyouWrapper}>
            <h2 className={styles.h2}>
              Thank you! Your details have been submitted successfully.
            </h2>

            <SectionButton link="./" text="GO TO HOME PAGE"></SectionButton>
          </div>
        </div>
      </div>
    );
}

export default AdsThankYou;