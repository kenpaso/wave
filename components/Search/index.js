import styles from "./Search.module.css";
import { useState, useEffect } from "react";
import {useRouter } from "next/router";
const Search = () => {
  const router = useRouter()
  const [link, setLink] = useState(null);
  const handleChange = (e) => setLink(e.target.value.replaceAll(" ", "-"));
  

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(link)
    router.push(`/song/${link}`)
    
  }
  return (
    <>
      <div className={styles.searchDiv}>
        <div className={styles.searchBox}>
          <div className={styles.contentDiv}>
          <form onSubmit={onFormSubmit}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search song"
              onChange={handleChange}
            />
            <button className={styles.searchButton}
            type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
