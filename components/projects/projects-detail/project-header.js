import Image from 'next/image';
import classes from './project-header.module.css';

function ProjectHeader({title, image, description}) {
  return (
    <header className={classes.header}>
      <div>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={200} height={150}/>
      </div>
      <p>{description}</p>
    </header>
  );
}

export default ProjectHeader;

