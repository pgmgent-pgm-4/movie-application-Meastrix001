import { FiEye } from "react-icons/fi";
import { VscPreview } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import * as Routes from '../../../routes';
import styles from './ShowListItem.module.scss';
import SHOW_DETAILS from '../../../routes/index'
const BASE_PATH_IAMGE = "https://image.tmdb.org/t/p"
const IMAGE_SIZE = "/w500/"

const MovieListItem = ({ showData }) => {
  return (    
    <article className={styles.list_item}>
        <Link className={styles.link} to={Routes.SHOW_DETAILS.replace(':id', showData.id)}>
          <img className={styles.img} src={BASE_PATH_IAMGE + IMAGE_SIZE + showData.poster_path} alt={showData.title} />
          <h3 className={styles.h3}>{showData.name}</h3>
        </Link> 
        <footer className={styles.meta}>
          <span className={styles.rating}>{Math.round(showData.vote_average / 5 * 100)}</span>
          <span className={styles.numReviews}><VscPreview /><span>{ showData.numReviews }</span></span>
          <span className={styles.numViews}><FiEye /><span>{ showData.numViews }</span></span>
        </footer>   
      </article>
  )
};

export default MovieListItem;