import Link from 'next/link';
import Image from 'next/image';

import classes from './project-item.module.css';
import {useEffect, useState} from "react";


function ProjectItem({project}) {
  const {title, image, excerpt, date, slug} = project;
  const [windowWidth, setWindowWidth] = useState()
  const sliceExcerpt = excerpt.split(' ').slice(0, 23).join(' ') + '...';

  const imagePath = `/images/projects/${image}`;

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

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
          { windowWidth < 780 &&
            <p style={{color: '#d5bdfc'}}>Click me to read more</p>
          }
        </div>
      </Link>
    </li>
  );
}

export default ProjectItem;
