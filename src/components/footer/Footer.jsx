import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.module.css';


const Footer = () => {
  return (
    <div className={classes.footContainer} id='contact-section'>
      <div className={classes.footerContent}>
        <span>Contact Me</span>
        <ul>
          <li>
            <a href="mailto:rahulsunilnair1074@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> Gmail
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rahul-nair-66a189228">
              <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.github.com/Rahulnair1234">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
          <li>
            <a href="https://instagram.com/rahul_nair29?igshid=NGExMmI2YTkyZg==">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </li>
          <li>
            <a href="https://discordapp.com/users/TechieRahul#4417/">
              <FontAwesomeIcon icon={faDiscord} /> Discord
            </a>
          </li>
        </ul>
        <p>&#169;2023 Rahul Nair</p>
      </div>
    </div>
  );
};

export default Footer;
