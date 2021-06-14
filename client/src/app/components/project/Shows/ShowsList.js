import React,{ useState  } from 'react';
import { useFetch } from "../../../hooks";
import Loading from '../../layout/Loading';
import Error from '../../layout/Error'
import styles from '../CardList.module.scss';
import Search from '../../layout/Search'
import FilterShows from './FilterShows'
import Pagination from '../Pagination'




const MoviesList = () => {
  const API_KEY = "910c5818cdbaa5582832e8d21687df71"
  const [text, setText] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const ALL_API = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${currentPage}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`

  const { data, isLoading, error } = useFetch(ALL_API, currentPage);
    console.log(isLoading)
const handleClick = (e) => {    
  // e.preventDefault();    
  setCurrentPage(currentPage + 1)
}

const handleClickBack = (e) => {    
  // e.preventDefault();    
  setCurrentPage(currentPage - 1)
}

  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Top rated shows</h2>
        <Search setText={setText} />
        <h4>{ text }</h4>
      </div>
    {
      error ? <Error>{error}</Error> : isLoading || !data ? <Loading type="TV-Shows"/> : 
        <div>
          <FilterShows text={text} data={data}/> 
          <Pagination pages={data.total_pages} currentPage={currentPage} handleClick={handleClick} handleClickBack={handleClickBack}/> 
        </div>
    }
    </div>
  );
}

export default MoviesList;