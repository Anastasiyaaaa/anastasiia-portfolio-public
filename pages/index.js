import Hero from "../components/home-page/hero";
import FeaturedProjects from "../components/home-page/featuredProjects";
import SkillsTabs from "../components/home-page/tabs";
import {getAllProjects, getReactProjects} from "../helpers/api-util";
import ErrorContext, {openPdf} from "../components/ui/error-context";
import Button from "../components/ui/button";


function HomePage({hero, projects}) {

  if (!hero || hero.length === 0 || !projects || projects.length === 0) {
    return <ErrorContext/>
  }

  return (
    <>
      {hero && <Hero hero={hero[0]}/>}
      <div style={{paddingTop: '40px', textAlign: 'center'}}>
        <Button onClick={openPdf}>Check CV</Button>
      </div>
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




