import { FiEye } from "react-icons/fi";
import { VscPreview } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';
import styles from './ListItem.module.scss';
const BASE_PATH_IAMGE = "https://image.tmdb.org/t/p"
const IMAGE_SIZE = "/w500/"

const ListItem = ({ data }) => {
  console.log(data)
  return (
    <article className={styles.list_item}>
        <Link className={styles.link} to={data.name !== undefined ? Routes.SHOW_DETAILS.replace(':id', data.id) : Routes.MOVIE_DETAILS.replace(':id', data.id)}>
          <img className={styles.img} src={data.poster_path !== null ? BASE_PATH_IAMGE + IMAGE_SIZE + data.poster_path : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"} alt={data.title !== undefined ? data.title : data.name } />
          <h3 className={styles.h3}>{data.title !== undefined ? data.title : data.name }</h3>
        </Link> 
        <footer className={styles.meta}>
          <span className={styles.rating}>{Math.round(data.vote_average / 5 * 100)}</span>
          <span className={styles.numReviews}><VscPreview /><span>{ data.numReviews }</span></span>
          <span className={styles.numViews}><FiEye /><span>{ data.numViews }</span></span>
        </footer>   
      </article>
  )
};

export default ListItem;