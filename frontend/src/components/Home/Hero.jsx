import styles from "./Hero.module.css";
import JournalCard from "../JournalCard/JournalCard"
const Home = () => {
  return (
    <JournalCard/>
    // <div className={styles['home']}>
    //     <div className={styles['hero-section']}>
    //       <div className={styles['carousel']}></div>
    //       <div className={styles['journal-info']}></div>
    //     </div>
    //     <div className={styles['main-section']}>
    //       <div className={styles['quick-navigation']}></div>

    //     </div>
    // </div>
  );
};

export default Home;
