import { useAuth } from '../../../contexts/firebase/auth.context';
import { useState, useEffect } from 'react';
import Loading from '../../layout/Loading';
import Error from '../../layout/Error'
import Search from '../../layout/Search'
import LatestMovies from '../movies/LatestMovies'
import Pagination from '../Pagination'
import Tmdb from '../../../contexts/movieApi/fetchApi'
const Home = () => {
  const {currentUser} = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [text, setText] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  console.log(currentUser)
  const API_KEY = "910c5818cdbaa5582832e8d21687df71"
  const MOVIE_LATEST = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`

  useEffect(() => {
    getLatestMovies();
}, [isLoading, currentPage]);

const getLatestMovies = async () => {
  <Tmdb 
  setData={setData}
  setError={setError}
  API={MOVIE_LATEST}
  setIsLoading={setIsLoading}
  />
  
    // try {
    //     const response = await fetch(MOVIE_LATEST);
    //     if (!response.ok) {
    //         setError('There went something wrong, are you sure the API link is right?');
    //     }
    //     const data = await response.json();
    //     setMovieRecData(data);
    // } catch(err) {
    //     setError(err)
    // } finally {
    //     setIsLoading(false);
    //   }
    }
  

  const handleClick = (e) => {    
    // e.preventDefault();    
    setCurrentPage(currentPage + 1)
    console.log('The link was clicked.', currentPage);
}

const handleClickBack = (e) => {    
  // e.preventDefault();    
  setCurrentPage(currentPage - 1)
  console.log('previous page', currentPage);
}

return(
  <div>
    {/* <Search setText={setText} /> */}
    <div>
    <h2>Latest movies</h2>
    <h4>{ text }</h4>
    </div>
  {
    error ? <Error>{error}</Error> : isLoading || !data ? <Loading type="movies"/> : 
      <div>
        <LatestMovies data={data}/>
        <Pagination currentPage={currentPage} handleClick={handleClick} handleClickBack={handleClickBack}/> 
      </div>
  }
  </div>
);

}
export default Home