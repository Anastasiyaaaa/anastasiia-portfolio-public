import classes from './featured-projects.module.css';
import ProjectsGrid from "../projects/projects-grid";
import Button from "../ui/button";

function FeaturedProjects({projects}) {
  return <section className={classes.latest}>
    <h2>Experience with React</h2>
    <ProjectsGrid projects={projects}/>
    <div style={{paddingTop: '20px', textAlign: 'center'}}>
      <Button link='/projects'>Let's check all projects</Button>
    </div>
  </section>
}

export default FeaturedProjects;