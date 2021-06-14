import styles from '../CardList.module.scss';
import ListItem from '../ListItem'
const filterMovies = ({text, data}) => {

return (
  <ul className={styles.ul}>
    { data.results.filter((i => {return(        text === "" ?
          i.map(i => {
            return(<li key={i.id} className={styles.list}>
              <ListItem  key={i.id} data={i}/>
            </li>)}) 
        : i.title.toLowerCase().includes(text.toLowerCase() 
        ? i.map(i => {return(<li className={styles.list} key={i.id}>
        <ListItem  key={i.id} data={i}/>
      </li>)} 
      ) : "" )) }))}
  </ul>  
)
}
export default filterMovies