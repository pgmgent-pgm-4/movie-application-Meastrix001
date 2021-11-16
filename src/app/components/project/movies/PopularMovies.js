import { useState } from 'react';
import styles from '../CardList.module.scss';
import Pagination from '../Pagination'
import MovieListItem from './MovieListItem';
import { useFetch } from "../../../hooks";
import Loading from '../../layout/Loading';
import Error from '../../layout/Error'
const PopularMovies = ({apiKey}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [showAll, setShowAll] = useState(false)
  const MOVIE_TOPRATED = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`
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
        showAll === true ? setShowAll(false) : setShowAll(true)
    };
    return(
      <div>
      <div>
        <h4 id="popularmovies">Popular movies</h4>
        <p onClick={toggleView} className={styles.hover}>{showAll ? "See less" : "See More"}</p>
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
      <p onClick={toggleView} className={styles.hover}>{showAll ? "See less" : ""}</p>
    <Pagination catId="#popularmovies" currentPage={currentPage} handleClick={handleClick} handleClickBack={handleClickBack}/> 
    </div>
  </div>
  )
};
export default PopularMovies;