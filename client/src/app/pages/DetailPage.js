import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BaseLayout } from '../layouts';
import { useFetch } from "../hooks/";
import { DetailPageContent } from '../components/project/' 
import { Loading } from '../components/layout';


const DetailPage = () => {
  const { id, movie } = useParams();
  console.log(id, movie)
  const MOVIE_API = `https://api.themoviedb.org/3/movie/${id}?api_key=910c5818cdbaa5582832e8d21687df71&language=en-US&append_to_response=video`
  console.log(MOVIE_API)
  // const { getProjectById } = useFirestore();

  const { data, isLoading, error } = useFetch(MOVIE_API);
console.log(data)
  return (
    
    <BaseLayout>
    { isLoading || !data ? <Loading/>  :

        <DetailPageContent type="movie" item={data}/>
    }
    </BaseLayout>
  );
};
 export default DetailPage