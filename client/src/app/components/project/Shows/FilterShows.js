import styles from '../CardList.module.scss';
import ListItem from '../ListItem'
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
        <ListItem  key={show.id} data={show}/>
      </li>)
      }
    </ul>
  )
}
export default filterShows