import { Link } from 'react-router-dom';
import { FiEye } from "react-icons/fi";
import { VscPreview } from "react-icons/vsc";
import styles from '../CardList.module.scss';
import MovieListItem from './MovieListItem';
import * as Routes from '../../../routes';
const BASE_PATH_IAMGE = "https://image.tmdb.org/t/p"
const IMAGE_SIZE = "/w500/"
const LatestMovies = ({data}) => {
  return(
    <ul className={styles.scrollUl}>
    { data.results.map(movie => 
          <li className={styles.list, styles.scrollList} key={movie.id}>
          <MovieListItem  key={movie.id} movieData={movie}/>
        </li>)
      }
  </ul>
  )
};
export default LatestMovies;