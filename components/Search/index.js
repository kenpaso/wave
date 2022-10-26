import styles from "./Search.module.css";

const Search = () => {
  return (
    <>
      <div className={styles.searchDiv}>
        <div className={styles.searchBox}>
          <div className={styles.contentDiv}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search song"
              
            />
            <button className={styles.searchButton} >
              Search
            </button>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Search;