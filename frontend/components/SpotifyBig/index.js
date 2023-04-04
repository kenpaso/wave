import styles from "./SpotifyBig.module.css";

const SpotifyBig = (props) => {
  const url = props.url;
  return (
    <>
      <iframe
          src={url}
          width="100%"
          height="300px"
          frameBorder="0"
          allowTransparency="1"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
    </>
  );
};

export default SpotifyBig;
