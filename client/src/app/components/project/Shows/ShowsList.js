// import { useState, useEffect } from 'react';

// import { useFirestore } from "../../contexts/firebase/firestore.context";

// import ProjectListItem from './ProjectListItem';

// const ProjectList = ({itemsPerPage = 10}) => {
//   const [ projects, setProjects ] = useState();
//   const [ lastVisible, setLastVisible ] = useState(null);
//   const [ loadMoreCounter, setLoadMoreCounter ] = useState(1);
//   const { getPagedProjects } = useFirestore();

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getPagedProjects(itemsPerPage, lastVisible);
//       setLastVisible(data.lastVisibleDoc);
//       setProjects(data.projects);
//     }

//     fetchData();    
//   }, [itemsPerPage, getPagedProjects, loadMoreCounter, lastVisible]);

//   return (
//     <div className="project-list">
//       {!!projects && projects.map(project => {
//         return (
//           <ProjectListItem key={project.uid} project={project} />
//         )
//       })}
//       {!!projects && (projects.length >= itemsPerPage) && <button onClick={() => setLoadMoreCounter(loadMoreCounter + 1)}>MORE</button>}
//     </div>
//   )
// };

// export default ProjectList;

import React,{ useState, useEffect } from 'react';

// import { useFirestore } from "../../../contexts/firebase/firestore.context";
// import { allMovies } from "../../../contexts/movieApi/index";
// import MovieListItem from './MovieListItem';
import Loading from '../../layout/Loading';
import Error from '../../layout/Error'
import styles from '../CardList.module.scss';
import Search from '../../layout/Search'
import FilterShows from './FilterShows'
import Pagination from '../Pagination'




const MoviesList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [text, setText] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const API = "https://api.themoviedb.org/3/tv/top_rated?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US&page=1";
  
  const ALL_API = `https://api.themoviedb.org/3/discover/tv?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US&sort_by=popularity.desc&page=${currentPage}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`

  useEffect(() => {
      getData();
  }, [isLoading, currentPage]);

  const getData = async () => {
    console.log("fetching data from page", currentPage)
      try {
          const response = await fetch(ALL_API);
          if (!response.ok) {
              setError('There went something wrong, are you sure the API link is right?');
          }
          const data = await response.json();
          setData(data);
      } catch(err) {
          setError(err)
      } finally {
          setIsLoading(false);
      // console.log('amount of pages', data.total_pages);

      }
  }

  const handleClick = (e) => {    
      // e.preventDefault();    
      setCurrentPage(currentPage + 1)
      console.log('Next page', currentPage);
  }
  const handleClickBack = (e) => {    
    // e.preventDefault();    
    setCurrentPage(currentPage - 1)
    console.log('previous page', currentPage);
}

  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Top rated shows</h2>
        <Search setText={setText} />
        <h4>{ text }</h4>
      </div>
    {
      error ? <Error>{error}</Error> : isLoading || !data ? <Loading type="TV-Shows"/> : 
        <div>
          <FilterShows text={text} data={data}/> 
          <Pagination pages={data.total_pages} currentPage={currentPage} handleClick={handleClick} handleClickBack={handleClickBack}/> 
        </div>
    }
    </div>
  );
}

export default MoviesList;