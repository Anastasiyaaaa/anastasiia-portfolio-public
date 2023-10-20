import Link from 'next/link';
import Image from 'next/image';

import classes from './project-item.module.css';

function ProjectItem({project}) {
  const {title, image, excerpt, date, slug} = project;

  const sliceExcerpt = excerpt.split(' ').slice(0, 23).join(' ') + '...';

  const imagePath = `/images/projects/${image}`;

  return (
    <li className={classes.project}>
      <Link href={`/projects/${slug}`}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{date}</time>
          <p>{sliceExcerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default ProjectItem;
