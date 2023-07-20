import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import classes from './ScrollToTop.module.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track the user's scrolling position
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Clean up the scroll event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Set the visibility of the button based on the user's scrolling position
    const topOffset = 300; // Adjust this value as needed
    const isTopVisible = window.pageYOffset > topOffset;
    setIsVisible(isTopVisible);
  };

  const scrollToTop = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`${classes['scroll-to-top-button']} ${
        isVisible ? classes.visible : ''
      }`}
    >
      <button onClick={scrollToTop}>
        <span className={`material-symbols-outlined ${classes.icon}`}>
          arrow_circle_up
        </span>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
