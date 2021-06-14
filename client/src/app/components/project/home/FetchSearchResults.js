import { useState } from 'react';
import styles from '../CardList.module.scss';
import ListItem from '../ListItem';
import { useFetch } from "../../../hooks";
import {Loading, Error } from '../../layout';
import Pagination from '../Pagination'


const FetchSearchResults = ({string}) => {
  const API_KEY = "910c5818cdbaa5582832e8d21687df71"
  const [currentPage, setCurrentPage] = useState(1)
  const MOVIE_TOPRATED = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${string}&page=1&include_adult=false`
  const [showAll, setShowAll] = useState(false)
  const { data, isLoading, error } = useFetch(MOVIE_TOPRATED, string);
  return(
    <div>
      <ul className={`${styles.ul}`}>
            {
            error ? <Error>{error}</Error> : isLoading || !data ? <Loading type="movies"/> :
            data.results.map(i => 
              <li className={styles.list} key={i.id}>
              <ListItem  key={i.id} data={i}/>
            </li>)
          }
      </ul>
  </div>
  )
};
export default FetchSearchResults;