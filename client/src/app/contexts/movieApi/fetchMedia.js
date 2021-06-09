const FetchMedia = ({movieId}) => {
  console.log("running")
  const MOVIE_API = `https://api.themoviedb.org/3/find/${movieId}?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US&external_source=imdb_id`
    try {
      const response = fetch(MOVIE_API);
      if (!response.ok) {
        // setError('There went something wrong, are you sure the API link is right?');
      }
      const data =  response.json();
      console.log(data)
      // mediaObj(data)
      return (
        <p>{data}</p>
      )
    } catch(err) {
      // setError(err)
    } finally {
      // setIsLoading(false);
    }
  }
export default FetchMedia