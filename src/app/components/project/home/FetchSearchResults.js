import styles from '../CardList.module.scss';
import ListItem from '../ListItem';
import { useFetch } from "../../../hooks";
import {Loading, Error } from '../../layout';


const FetchSearchResults = ({string, url}) => {
  const { data, isLoading, error } = useFetch(url, string);
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