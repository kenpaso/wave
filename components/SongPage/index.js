import styles from "./SongPage.module.css";

const SongPage = () => {
  return (
    <>
      <div className={styles.songDiv}>
      <iframe src="https://open.spotify.com/embed/track/6nz35DNIzbtj5ztpDEcW1j?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
      <iframe src="https://open.spotify.com/embed/track/6nz35DNIzbtj5ztpDEcW1j?utm_source=generator&theme=1" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </>
  );
};

export default SongPage;
