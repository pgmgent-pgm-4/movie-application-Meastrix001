import styles from '../CardList.module.scss';
import ShowListItem from './ShowListItem'
const BASE_PATH_IAMGE = "https://image.tmdb.org/t/p"
const IMAGE_SIZE = "/w500/"

const filterShows = ({text, data}) => {

return (
<ul className={styles.ul}>
      { data.results.filter((i => {
      if (text === "") {
      return i
      } else if (i.name.toLowerCase().includes(text.toLowerCase())) {
      return i
      }})).map(show => 
      <li key={show.id} className={styles.list}>
        <ShowListItem  key={show.id} showData={show}/>
                  {/* <img alt="..." className={styles.img} src={BASE_PATH_IAMGE + IMAGE_SIZE + show.poster_path}></img>
          <h3 className={styles.h3}>{show.name}</h3> */}
      </li>)
      }
    </ul>
  )
}
export default filterShows