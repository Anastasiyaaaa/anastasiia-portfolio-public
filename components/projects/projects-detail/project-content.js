import ProjectHeader from './project-header';
import classes from './project-content.module.css';

function createListOfItem(array) {
  return array.map((item, i) => {
    if (item.trim().length <= 1) {
      return
    }
    return <li key={i}>{item.trim()} </li>
  })
}

function getStackColumns(stack) {
  const stackArr = stack.split(';').filter(stack => stack.trim().length > 1);
  const stackMidpoint = Math.ceil(stackArr.length / 2);
  const stackColumn1 = createListOfItem(stackArr.slice(0, stackMidpoint));
  const stackColumn2 = createListOfItem(stackArr.slice(stackMidpoint));

  return {stackColumn1, stackColumn2}
}

function ProjectContent({project}) {
  const imagePath = `/images/projects/${project.image}`;
  const {stackColumn1, stackColumn2} = getStackColumns(project.stack);
  const responsibilitiesList = createListOfItem(project.responsibilities.split(';'));

  return (
    <article className={classes.content}>
      <ProjectHeader title={project.title} image={imagePath} description={project.description}/>
      <h2>Responsibilities</h2>
      <ul>
        {responsibilitiesList}
      </ul>
      <h2>Stack</h2>
      <div className={classes.skillList}>
        <ul>
          {stackColumn1}
        </ul>
        <ul>
          {stackColumn2}
        </ul>
      </div>
      <h2>Description</h2>
      <p style={{paddingLeft: '20px'}}>{project.excerpt}</p>
    </article>
  );
}

export default ProjectContent;
