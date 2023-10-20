import Hero from "../components/home-page/hero";
import FeaturedProjects from "../components/home-page/featuredProjects";
import Button from "../components/ui/button";
import ErrorAlert from "../components/ui/error-alert";
import SkillsTabs from "../components/home-page/tabs";
import {getAllProjects, getReactProjects} from "../helpers/api-util";


function HomePage({hero, projects, messageProject, messageHero}) {

  const openPdf = () => {
    const pdfURL = '/files/ao_cv.pdf';
    window.open(pdfURL, '_blank');
  };

  const cv =  <div style={{paddingTop: '40px', textAlign: 'center'}}>
    <Button onClick={openPdf}>Check CV</Button>
  </div>

  if (!hero &&
    hero.length === 0 &&
    !projects &&
    projects.length === 0) {

    return (
      <ErrorAlert>
        <p>Oops, something wrong: <br/>
          {messageProject} <br/>
          {messageHero}
        </p>
        <Button onClick={openPdf}>Check CV</Button>
      </ErrorAlert>
    )
  }

  return (
    <>
      {hero && <Hero hero={hero[0]}/>}
      {cv}
      {projects && projects.length > 0 &&
        <FeaturedProjects projects={projects}/>
      }
      <SkillsTabs skills={hero[0].skills} tools={hero[0].tools} others={hero[0].others}/>
    </>
  );
}


export async function getStaticProps() {
  const {data: responseProjects, message: messageProject} = await getReactProjects('projects');
  const {data: responseHero, message: messageHero} = await getAllProjects('hero');

  return {
    props: {
      projects: responseProjects,
      messageProject: messageProject,
      hero: responseHero,
      messageHero: messageHero
    },
    revalidate: 86400,
  };
}

export default HomePage;




