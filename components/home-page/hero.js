import Image from 'next/image';
import classes from './hero.module.css';

function Hero({hero}) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/hero.webp'
          alt='An image showing Anastasiia'
          priority={true}
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm {hero.name}</h1>
      <p>{hero.description}
      </p>
    </section>
  );
}

export default Hero;
