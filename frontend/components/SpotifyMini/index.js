import styles from "./SpotifyMini.module.css";

const SpotifyMini= (props) => {
  const url = props.url;
  return (
    <>
      <iframe
              src={url}
              width="100%"
              height="100px"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
    </>
  );
};

export default SpotifyMini;
