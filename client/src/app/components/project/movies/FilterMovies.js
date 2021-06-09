import styles from '../CardList.module.scss';
import MovieListItem from './MovieListItem'
const BASE_PATH_IAMGE = "https://image.tmdb.org/t/p"
const IMAGE_SIZE = "/w500/"

const filterMovies = ({text, data}) => {

return (
  <ul className={styles.ul}>
    { data.results.filter((i => {
        if (text === "") {
          return i
        } else if (i.title.toLowerCase().includes(text.toLowerCase())) {
          return i
        }})).map(movie => 
          <li className={styles.list} key={movie.id}>
          <MovieListItem  key={movie.id} movieData={movie}/>
        </li>)
      }
  </ul>
)
}
export default filterMovies