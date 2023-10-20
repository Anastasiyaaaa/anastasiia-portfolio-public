import classes from './featured-projects.module.css';
import ProjectsGrid from "../projects/projects-grid";

function FeaturedProjects({projects}) {
  return <section className={classes.latest}>
    <h2>Experience with React</h2>
    <ProjectsGrid projects={projects}/>
  </section>
}

export default FeaturedProjects;