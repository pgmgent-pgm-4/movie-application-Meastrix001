import React,{ useState, useEffect, } from 'react';
// import { useFirestore } from "../../../contexts/firebase/firestore.context";
// import { allMovies } from "../../../contexts/movieApi/index";
// import MovieListItem from './MovieListItem';
import Loading from '../../layout/Loading';
import Error from '../../layout/Error'
import Search from '../../layout/Search'
import styles from '../CardList.module.scss';
import FilterMovies from './FilterMovies'
import Pagination from '../Pagination'

// SEARCH API EXAMPLE https://api.themoviedb.org/3/search/multi?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US&query=fast&page=1&include_adult=false
//https://api.themoviedb.org/3/discover/movie?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

// const API = "https://api.themoviedb.org/3/movie/top_rated?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US&page=1";

const MoviesList =  () => {
  const [text, setText] = useState("")
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)

  const API = "https://api.themoviedb.org/3/discover/movie?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
  
  const ALL_API = `https://api.themoviedb.org/3/discover/movie?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=${currentPage}&with_watch_monetization_types=flatrate`

  useEffect(() => {
      getData();
  }, [isLoading, currentPage]);

  const getData = async () => {
      try {
          const response = await fetch(ALL_API);
          if (!response.ok) {
              setError('There went something wrong, are you sure the API link is right?');
          }
          const data = await response.json();
          setData(data);
      } catch(err) {
          setError(err)
      } finally {
          setIsLoading(false);
        }
      }
      
      const handleClick = (e) => {    
        // e.preventDefault();    
        setCurrentPage(currentPage + 1)
        console.log('The link was clicked.', currentPage);
    }

    const handleClickBack = (e) => {    
      // e.preventDefault();    
      setCurrentPage(currentPage - 1)
      console.log('previous page', currentPage);
  }

  return (
    <div className={styles.wrapper}>
      <div>
      <h2>Top rated movies</h2>
      <Search setText={setText} />
      <h4>{ text }</h4>
      </div>
    {
      error ? <Error>{error}</Error> : isLoading || !data ? <Loading type="movies"/> : 
        <div>
          <FilterMovies text={text} data={data}/>
          <Pagination currentPage={currentPage} handleClick={handleClick} handleClickBack={handleClickBack}/> 
        </div>
    }
    </div>
  );
}

export default MoviesList;