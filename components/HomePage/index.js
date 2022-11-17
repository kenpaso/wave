import styles from "./HomePage.module.css";
import Search from "../Search";
import { FaRandom } from "react-icons/fa";
import { motion, MotionConfig } from "framer-motion";
const HomePage = () => {
  return (
    <>
        <div className={styles.top}>
          <h1 className={styles.h1Home}>wave</h1>
          <h2 className={styles.h2Home}>
            Get to know your music.
          </h2>
        </div>
        <Search/>
        {/* <div className={styles.bottom}>
        <motion.div whileHover={{ scale: 1.1 }}>
        <div  className={styles.button} >
        <FaRandom className={styles.buttonIcon} />
        <h3 className={styles.buttonh3}>hishdi</h3>
        </div>
       
        
        </motion.div>
        
        </div> */}
        
    </>
  );
};

export default HomePage;
