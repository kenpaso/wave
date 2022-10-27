import styles from "./SongPage.module.css";
import {GiMicrophone} from 'react-icons/gi';
import {AiOutlineExclamationCircle} from 'react-icons/ai';
import {GiLoveSong} from 'react-icons/gi';
import {BsInfoLg} from 'react-icons/bs';

const SongPage = () => {
  return (
    <>
      <div className={styles.songDiv}>
        <iframe
          src="https://open.spotify.com/embed/track/6nz35DNIzbtj5ztpDEcW1j?utm_source=generator&theme=1"
          width="100%"
          height="360px"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <div className={styles.buttonDiv}>
        <BsInfoLg style={{ fontSize: "50px" }}/>
        <GiMicrophone style={{ fontSize: "50px" }}/>
        <GiLoveSong style={{ fontSize: "50px" }}/>
      </div>
    </>
  );
};

export default SongPage;
