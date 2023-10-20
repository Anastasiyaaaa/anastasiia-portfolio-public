import Link from 'next/link';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import Logo from './logo';
import classes from './main-footer.module.css';

function MainFooter() {
  return (
    <footer className={classes.footer}>
      <Link href='/'>
        <Logo/>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='https://t.me/an_anastasiya'>
              <TelegramIcon/> Telegram
            </Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/anastasiia-onyshchenko-9300a9136/'>
              <LinkedInIcon/> Linkedin </Link>
          </li>
          <li>
            <Link href='https://github.com/Anastasiyaaaa/anastasii-portfolio-public/'>
              <GitHubIcon/> GitHub </Link>
          </li>
          <li>
            <Link href={`mailto:anastasiya.onishchenk@gmail.com`}>
              <ContactMailIcon/> anastasiya.onishchenk@gmail.com</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default MainFooter;
