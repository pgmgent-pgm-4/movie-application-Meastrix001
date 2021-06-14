import React from 'react';
import styles from './searchBar.module.scss'

const SearchBar = ({text, setText}) => {

  return (
    <div className={styles.searbar_container}>
      <input 
       key=""
       value={text}
       placeholder="Type to search..."
       onChange={(e) => {setText(e.target.value)}}
      />
      <button type="search">
        Search
     </button>
    </div>
  );
}
export default SearchBar