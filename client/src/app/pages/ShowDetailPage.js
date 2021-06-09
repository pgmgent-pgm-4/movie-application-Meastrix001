import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProjectDetails, ProjectReviewList } from "../components/project";
import { useFirestore } from "../contexts/firebase/firestore.context";
import { BaseLayout } from '../layouts';

const ProjectPage = () => {
  const { id } = useParams();
  const [ project, setProject ] = useState();
  const { getProjectById } = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectById(id);
      setProject(data);
    };

    fetchData();    
  }, [id, getProjectById])

  return (
    <BaseLayout>
      {!!project && <ProjectDetails project={project} /> }
      {!!project && <ProjectReviewList projectId={project.uid} /> }
    </BaseLayout>
  );
};

export default ProjectPage;