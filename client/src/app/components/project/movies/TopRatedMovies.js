import { useState } from 'react';
import styles from '../CardList.module.scss';
import MovieListItem from './MovieListItem';
import { useFetch } from "../../../hooks";
import {Loading, Error } from '../../layout';
import Pagination from '../Pagination'


const TopRatedMovies = ({apiKey}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const MOVIE_TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${currentPage}`
  const [showAll, setShowAll] = useState(false)
  
  const { data, isLoading, error } = useFetch(MOVIE_TOPRATED, currentPage);
const handleClick = (e) => {    
  // e.preventDefault();    
  setCurrentPage(currentPage + 1)
}

const handleClickBack = (e) => {    
  // e.preventDefault();    
  setCurrentPage(currentPage - 1)
}

const toggleView = () => {
  {
    showAll === true ? setShowAll(false) : setShowAll(true)
  }
};

  return(
    <div>
      <div>
        <h4 id="topratedmovies">Top Rated movies</h4>
        <a onClick={toggleView} className={styles.hover}>{showAll ? "See less" : "See More"}</a>
      </div>
      <ul className={`${showAll ? styles.cardListOpen : styles.cardListClosed} ${styles.ul}`}>
            {
            error ? <Error>{error}</Error> : isLoading || !data ? <Loading type="movies"/> :
            data.results.map(movie => 
              <li className={styles.list} key={movie.id}>
              <MovieListItem  key={movie.id} movieData={movie}/>
            </li>)
          }
      </ul>
      <div className={styles.flex}>
        <a onClick={toggleView} className={styles.hover}>{showAll ? "See less" : ""}</a>
        <Pagination catId="#topratedmovies" currentPage={currentPage} handleClick={handleClick} handleClickBack={handleClickBack}/> 
      </div>
  </div>
  )
};
export default TopRatedMovies;