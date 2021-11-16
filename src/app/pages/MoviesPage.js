import { MoviesList } from '../components/project/movies';
import { BaseLayout } from '../layouts';

const ProjectsPage = () => {
  return (
    <BaseLayout>
      <MoviesList />
    </BaseLayout>
  );
};

export default ProjectsPage;