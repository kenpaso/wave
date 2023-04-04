import styles from "./SongPage.module.css";
import { GiMicrophone } from "react-icons/gi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { GiLoveSong } from "react-icons/gi";
import { BsInfoLg } from "react-icons/bs";
import { motion } from "framer-motion";
import Modal from "../Modal";
import SpotifyBig from "../SpotifyBig";
import SpotifyMini from "../SpotifyMini";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { songData } from "../data";
import Search from "../Search";
const SongPage = () => {
  const router = useRouter();

  const name = router.query.id;

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const [modal2Open, setModal2Open] = useState(false);

  const close2 = () => setModal2Open(false);
  const open2 = () => setModal2Open(true);

  const [modal3Open, setModal3Open] = useState(false);

  const close3 = () => setModal3Open(false);
  const open3 = () => setModal3Open(true);

  const handleClick = e => {
    e.preventDefault();

    router.push(`/`)
    
  }

  return (
    <>
      <div className={styles.top}>
        <h1 className={styles.title} onClick={handleClick}>wave</h1>
      </div>
      {songData
        .filter((item) => item.title === name)
        .map((filteredItem) => {
          return (
            <>
              <div className={styles.songDiv}>
                {filteredItem.bigUrl ? (
                  <SpotifyBig url={filteredItem.bigUrl} />
                ) : null}
              </div>
              <div className={styles.buttonDiv}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  style={{ background: "white", border: "none" }}
                  onClick={() => (modalOpen ? close() : open())}
                >
                  <BsInfoLg
                    style={{
                      fontSize: "50px",
                      background: "white",
                      color: "black",
                    }}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  style={{ background: "white", border: "none" }}
                  onClick={() => (modal2Open ? close2() : open2())}
                >
                  <GiMicrophone
                    style={{
                      fontSize: "50px",
                      background: "white",
                      color: "black",
                    }}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  style={{ background: "white", border: "none" }}
                  onClick={() => (modal3Open ? close3() : open3())}
                >
                  <GiLoveSong
                    style={{
                      fontSize: "50px",
                      background: "white",
                      color: "black",
                    }}
                  />
                </motion.button>
              </div>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
              >
                {modalOpen && (
                  <Modal
                    modalOpen={modalOpen}
                    handleClose={close}
                    lyrics={false}
                    text={filteredItem.info}
                  />
                )}
                {modal2Open && (
                  <Modal
                    modal2Open={modal2Open}
                    handleClose={close2}
                    lyrics={true}
                    text={filteredItem.lyrics}
                  />
                )}
                {modal3Open && (
                  <Modal modal3Open={modal3Open} handleClose={close3}>
                    {filteredItem.samples.map((sample) => (
                      <SpotifyMini key={sample.toString()} url={sample} />
                    ))}
                  </Modal>
                )}
              </AnimatePresence>
            </>
          );
        })}
      <Search />
    </>
  );
};

export default SongPage;
