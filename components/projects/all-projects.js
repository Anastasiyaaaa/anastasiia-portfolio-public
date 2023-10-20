import classes from './all-projects.module.css';
import ProjectsGrid from './projects-grid';

function AllProjects({projects, title}) {
  return (
    <section className={classes.projects}>
      <h1>{title} </h1>
      <ProjectsGrid projects={projects}/>
    </section>
  );
}

export default AllProjects;
