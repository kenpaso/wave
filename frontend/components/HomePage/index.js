import styles from "./HomePage.module.css";
import Search from "../Search";
import { FaRandom } from "react-icons/fa";
import { motion, MotionConfig } from "framer-motion";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/song/rich-flex`);
  };

  return (
    <>
      <div className={styles.top}>
        <h1 className={styles.h1Home}>wave</h1>
        <h2 className={styles.h2Home}>Get to know your music.</h2>
      </div>
      <Search />
      <div className={styles.bottom}>
        <motion.div whileHover={{ scale: 1.08 }} onClick={handleSubmit}>
          <div className={styles.button}>
            <FaRandom className={styles.buttonIcon} />
            <h3 className={styles.buttonh3}>Random</h3>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
