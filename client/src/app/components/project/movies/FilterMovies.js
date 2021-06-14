import styles from '../CardList.module.scss';
import ListItem from '../ListItem'
const filterMovies = ({text, data}) => {

return (
  <ul className={styles.ul}>
    { data.results.map(i => 
          <li className={styles.list} key={i.id}>
          <ListItem  key={i.id} data={i}/>
        </li>)
      }
  </ul>
)
}
export default filterMovies