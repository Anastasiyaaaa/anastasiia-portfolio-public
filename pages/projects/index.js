import AllProjects from "../../components/projects/all-projects";
import ProjectSearch from "../../components/projects/projects-search/projects-search";
import {useRouter} from "next/router";
import {getAllProjects} from "../../helpers/api-util";
import Head from "next/head";

function AllProjectsPage({projects}) {
  const router = useRouter();

  function findProjectsHandler(type) {
    const fullPath = `/projects/type/${type}`;
    router.push(fullPath);
  }

  return (
    <>
      <Head>
        <title>All Project</title>
        <meta
          name='description'
          content={`All project information.`}
        />
      </Head>
      <ProjectSearch onSearch={findProjectsHandler}/>
      {projects && projects.length >= 1 &&
        <AllProjects projects={projects} title='All Projects '/>
      }
    </>
  );
}

export async function getStaticProps() {
  const {data, message} = await getAllProjects('projects');

  return {
    props: {
      projects: data,
      message,
    },
    revalidate: 86400,
  };
}

export default AllProjectsPage;

