import { FunctionComponent } from 'react';
import styles from './Frame.module.css';


const Frame:FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.discoverYourSuitableContainer}>
        <p className={styles.discoverYour}>{`Discover your `}</p>
        <p className={styles.discoverYour}>suitable hostel in the heart of the city.</p>
      </div>
      <div className={styles.frameItem} />
      <img className={styles.frameInner} alt="" src="/rectangle-3@2x.png" />
      <div className={styles.nanaHostel}>NANA HOSTEL</div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-4@2x.png" />
      <div className={styles.olympiaHostel}>OLYMPIA HOSTEL</div>
      <img className={styles.frameChild1} alt="" src="/rectangle-5@2x.png" />
      <img className={styles.frameChild2} alt="" src="/rectangle-6@2x.png" />
      <div className={styles.aryanHostel}>ARYAN HOSTEL</div>
      <div className={styles.hostifyBooking}>{`HOSTIFY BOOKING `}</div>
      <div className={styles.jjHostel}>JJ HOSTEL</div>
    </div>);
};

export default Frame;
