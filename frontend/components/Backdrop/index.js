import styles from "./Backdrop.module.css";
import { motion } from "framer-motion";

const Backdrop = ({ children, onclick }) => {
  return (
    <>
      <motion.div
        className={styles.back}
        onClick={onclick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Backdrop;
