import {useRouter} from 'next/router';
import Head from 'next/head';

import Button from '../../../components/ui/button';
import ErrorAlert from '../../../components/ui/error-alert';
import {getFilteredProjects} from "../../../helpers/api-util";
import AllProjects from "../../../components/projects/all-projects";

function FilteredProjectsPage({projects}) {
  const router = useRouter();
  const filterType = router.query.typeId;

  let pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name='description'
        content={`A list of filtered projects.`}
      />
    </Head>
  );

  if (filterType !== 'react' &&
    filterType !== 'e-commerce' &&
    filterType !== 'blog') {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
          <Button link='/projects'>Show All Projects</Button>
        </ErrorAlert>
      </>
    );
  }


  if (!projects || projects.length === 0) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      {pageHeadData}
      <div style={{textAlign: 'center', padding: '40px 0 0'}}>
        <Button link='/projects'>Show all projects</Button>
      </div>
      <AllProjects projects={projects} title={`All Projects for ${filterType}`}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const {params} = context;
  const projectsType = params.typeId;

  const {data} = await getFilteredProjects(projectsType, 'projects')
  return {
    props: {
      projects: data,
    },
  };
}

export default FilteredProjectsPage;
