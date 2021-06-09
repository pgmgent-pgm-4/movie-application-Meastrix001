import styles from './Pagination.module.scss';

const Pagination = ({ pages, currentPage, handleClick, handleClickBack}) => {
  return (
    <div className={styles.paging}>
      { currentPage !== 1 ?
      <a className={styles.flex} href="#" onClick={handleClickBack}>
        <h4>{currentPage - 2 > 0 ? currentPage -2 : ""}</h4>
        <h4>{currentPage - 1 > 0 ? currentPage -1 : 0}</h4>
        <h4> last page</h4>
      </a> : ""
      }
      { currentPage !== pages ?

      <a className={styles.flex} href="#" onClick={handleClick}>
        <h4> Next page</h4>
        <h4>{currentPage !== pages ? currentPage + 1 : ""}</h4>
      </a>
       : ""}
    </div>
  )
}
export default Pagination