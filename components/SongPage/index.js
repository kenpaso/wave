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
import {useRouter } from "next/router";
import { songData } from "../data";
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

  return (
    <>
      <div className={styles.songDiv}>
      {songData
            .filter((item) => item.title === name)
            .map((filteredItem) => {
              return (
                <>
        <SpotifyBig url={filteredItem.bigUrl} />
        </>
            )
            })}
      </div>
      <div className={styles.buttonDiv}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{ background: "white", border: "none" }}
          onClick={() => (modalOpen ? close() : open())}
        >
          <BsInfoLg
            style={{ fontSize: "50px", background: "white", color: "black" }}
          />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{ background: "white", border: "none" }}
          onClick={() => (modal2Open ? close2() : open2())}
        >
          <GiMicrophone
            style={{ fontSize: "50px", background: "white", color: "black" }}
          />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{ background: "white", border: "none" }}
          onClick={() => (modal3Open ? close3() : open3())}
        >
          <GiLoveSong
            style={{ fontSize: "50px", background: "white", color: "black" }}
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
            text={`On “Lucid Dreams,” Juice WRLD explores the mental anguish he feels after experiencing a break-up. Lucid dreaming refers to a state of consciousness where a person is aware they are dreaming. With enough experience, a dreamer can slowly begin to control the contents of their dreams. Juice uses the idea of controlling a lucid dream as an analogy for his mental state; to avoid the pain of seeing his ex-lover in his dreams, Juice seeks to replace them—for good.`}
          />
        )}
        {modal2Open && (
          <Modal
            modal2Open={modal2Open}
            handleClose={close2}
            lyrics={true}
            text={`[Intro]
Enviyon on the mix
No, no, no, no
No-no, no, no, no
No, no, no, no, no
No, no, no, no

[Chorus]
I still see your shadows in my room
Can't take back the love that I gave you
It's to the point where I love and I hate you
And I cannot change you, so I must replace you, oh
Easier said than done, I thought you were the one
Listenin' to my heart instead of my head
You found another one, but I am the better one
I won't let you forget me
I still see your shadows in my room
Can't take back the love that I gave you
It's to the point where I love and I hate you
And I cannot change you, so I must replace you, oh
Easier said than done, I thought you were the one
Listenin' to my heart instead of my head
You found another one, but I am the better one
I won't let you forget me

[Verse]
You left me falling and landing inside my grave
I know that you want me dead
I take prescriptions to make me feel a-okay
I know it's all in my head
I have these lucid dreams where I can't move a thing
Thinking of you in my bed
You were my everything
Thoughts of a wedding ring
Now I'm just better off dead (Uh, uh, uh)
I'll do it over again
I didn't want it to end
I watch it blow in the wind
I should've listened to my friends
Leave this shit in the past, but I want it to last
You were made outta plastic, fake
I was tangled up in your drastic ways
Who knew evil girls had the prettiest face?
You gave me a heart that was full of mistakes
I gave you my heart and you made heartbreak
You might also like
Robbery
Juice WRLD
Wasted
Juice WRLD
Lean wit Me
Juice WRLD
[Bridge]
You made my heart break
You made my heart ache (I still see your shadows in my room)
You made my heart break
You made my heart ache (Can't take back the love that I gave you)
You made my heart break (Were made outta plastic, fake)
You made my heart ache (I still see your shadows in my room)
You made my heart break again (I was tangled up in your drastic ways)
(Who knew evil girls had the prettiest face?)

[Chorus]
I still see your shadows in my room
Can't take back the love that I gave you
It's to the point where I love and I hate you
And I cannot change you, so I must replace you, oh
Easier said than done, I thought you were the one
Listenin' to my heart instead of my head
You found another one, but I am the better one
I won't let you forget me
I still see your shadows in my room
Can't take back the love that I gave you
It's to the point where I love and I hate you
And I cannot change you, so I must replace you, oh
Easier said than done, I thought you were the one
Listenin' to my heart instead of my head
You found another one, but I am the better one
I won't let you forget me
[Outro]
Leave this shit in the past, but I want it to last
You were made outta plastic, fake
I was tangled up in your drastic ways
Who knew evil girls had the prettiest face?
Easier said than done, I thought you were—
—instead of my head
You found another— better one
I won't let you forget me`}
          />
        )}
        {modal3Open && (
          <Modal modal3Open={modal3Open} handleClose={close3}>
            <SpotifyMini url="https://open.spotify.com/embed/track/5TrvGxuqaYKsF7C0NfrLrY?utm_source=generator" />
            <SpotifyMini url="https://open.spotify.com/embed/track/0X8DcetL926BYiPJYstJTc?utm_source=generator" />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default SongPage;
