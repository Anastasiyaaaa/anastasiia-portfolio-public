import ProjectItem from './project-item';
import classes from './projects-grid.module.css';

function ProjectsGrid({projects}) {

  return (
    <ul className={classes.grid}>
      {projects.map((project) => (
        <ProjectItem key={project.slug} project={project}/>
      ))}
    </ul>
  );
}

export default ProjectsGrid;
