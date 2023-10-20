import Head from "next/head";
import ProjectContent from "../../components/projects/projects-detail/project-content";
import {getProjectById, getReactProjects} from "../../helpers/api-util";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

function ProjectDetailPage({selectedProject}) {

  if (!selectedProject) {
    return (<>
      <Head>
        <title>Project detail</title>
        <meta
          name='description'
          content={`No project found by this request.`}
        />
      </Head>
      <ErrorAlert>
        <p>Oops, check another project</p>
        <Button link='/projects'>Let's check all projects</Button>
      </ErrorAlert>
    </>)
  }

  return (
    <>
      <Head>
        <title>Project detail</title>
        <meta
          name='description'
          content={`Project detail information.`}
        />
      </Head>
      <ProjectContent project={selectedProject}/>
    </>
  );
}

export default ProjectDetailPage;

export async function getStaticProps(context) {
  const projectId = context.params.projectId;
  const {data, message} = await getProjectById(projectId, 'projects')

  return {
    props: {
      selectedProject: data,
      message: message
    },
    revalidate: 1800
  }
}

export async function getStaticPaths() {
  const {data} = await getReactProjects('projects');

  if (!data) {
    return {
      paths: ['/projects/scheduling-platform'],
      fallback: true
    }
  }

  const paths = data.map(project => {
    return ({params: {projectId: project.slug}})
  });

  return {
    paths: paths,
    fallback: 'blocking',
  }
}
