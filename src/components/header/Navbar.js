import classes from './Navbar.module.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const menuToggle = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      <nav>
        <span className={classes.small}>Nair's CodeLab</span>
        <span className={classes.large}>
          Nair's CodeLab:Engineering Web Solutions
        </span>
        <span className={classes.hamBurger} onClick={menuToggle}>
          {<FontAwesomeIcon icon={faBars} />}
        </span>

        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          {/* <li>
            <Link to='about-section' smooth={true} duration={500}>
              About
            </Link>
          </li> */}
          <li>
            <a href='/project'>Projects</a>
          </li>
          {/* <li>
            <a href='/certificates'>Certifications</a>{' '}
          </li> */}
          <li>
            <Link to='contact-section' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {isMenuVisible ? (
        <nav className={classes.dropdown}>
          <ul className={classes.dropdown}>
            <li>
              <a href='/'>Home</a>
            </li>
            {/* <li>
              <Link to='about-section' smooth={true} duration={500}>
                About
              </Link>
            </li> */}
            <li>
              <a href='/project'>Projects</a>
            </li>
            {/* <li>
              <a href='/certificates'>Certifications</a>{' '}
            </li> */}
            <li>
              <Link to='contact-section' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        ''
      )}
    </div>
  );
};

export default Navbar;
