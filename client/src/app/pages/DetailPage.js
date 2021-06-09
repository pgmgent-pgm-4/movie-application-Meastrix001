import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProjectDetails, ProjectReviewList } from "../components/project";
import { useFirestore } from "../contexts/firebase/firestore.context";
import { BaseLayout } from '../layouts';
import { FetchMedia} from '../contexts/movieApi'

const DetailPage = () => {
  const { id } = useParams();
  console.log(id)
  const [ mediaObj, setMediaObj ] = useState();
    const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const MOVIE_API = `https://api.themoviedb.org/3/find/${id}?api_key=910c5818cd baa5582832e8d21687df71&language=en-US&external_source=imdb_id`
  // const { getProjectById } = useFirestore();

  useEffect(() => {
    fetchData();

  }, [id])

  const fetchData = async () => {
    console.log("fetching details")
    try {
      const response = await fetch(MOVIE_API);
      if (!response.ok) {
          setError('There went something wrong, are you sure the API link is right?');
      }
      const data = await response.json();
      setMediaObj(data);
  } catch(err) {
      setError(err)
    } finally {
      setIsLoading(false);
      console.log(mediaObj)
    }
  };
  return (
    
    <BaseLayout>
      {/* {!!mediaObj && <ProjectDetails project={mediaObj} /> } */}
      {/* {!!mediaObj && <ProjectReviewList projectId={mediaObj.id} /> } */}
    </BaseLayout>
  );
};
 export default DetailPage