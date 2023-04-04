import styles from "./Modal.module.css";
import Backdrop from "../Backdrop";
import { motion } from "framer-motion";
import { useState } from "react";
const dropIn = {
  hidden :{
    y: "-100vh",
    opacity: 0,
  },
  visible:{
    y:0,
    opacity: 1,
    transition:{
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    }
  },
  exit:{
    y: "100vh",
    opacity: 0,
  }
}
const Modal = ({handleClose, text, children, lyrics}) => {
  const [isLyrics, setIsLyrics] = useState(lyrics);

  return (
    <>
      <Backdrop onclick={handleClose}>
          <motion.div
            onclick={(e) => e.stopPropagation}
            className={styles.modal}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit">
                <div className={styles.content}>
                  {isLyrics ? 
         <p className={styles.text} >{text}</p>
        : <p className={styles.text}>{text}</p>
        }
                  
                 {children}
                </div>
                <div className={styles.buttonDiv}>
                  <button onclick={handleClose}>Close</button>
                </div>
             
        
          </motion.div>
        
      </Backdrop>
    </>
  );
};

export default Modal;
