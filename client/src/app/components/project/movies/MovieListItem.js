import { FiEye } from "react-icons/fi";
import { VscPreview } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import * as Routes from '../../../routes';
import styles from '../ListItem.module.scss';
const BASE_PATH_IAMGE = "https://image.tmdb.org/t/p"
const IMAGE_SIZE = "/w500/"

const MovieListItem = ({ movieData }) => {
  return (
    <article className={styles.list_item}>
        <Link className={styles.link} to={Routes.MOVIE_DETAILS.replace(':id', movieData.id)}>
          <img className={styles.img} src={movieData.poster_path !== null ? BASE_PATH_IAMGE + IMAGE_SIZE + movieData.poster_path : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/No_image_available_450_x_600.svg/450px-No_image_available_450_x_600.svg.png"} alt={movieData.title} />
          <h3 className={styles.titleing}>{movieData.title}</h3>
        </Link> 
        <footer className={styles.meta}>
          <span className={styles.rating}>{Math.round(movieData.vote_average / 5 * 100)}</span>
          <span className={styles.numReviews}><VscPreview /><span>{ movieData.numReviews }</span></span>
          <span className={styles.numViews}><FiEye /><span>{ movieData.numViews }</span></span>
        </footer>   
      </article>
  )
};

export default MovieListItem;