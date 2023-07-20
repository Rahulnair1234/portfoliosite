import classes from './App.module.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import About from './components/main/About';
import Qualification from './components/main/Qualification';
import Greetings from './components/main/Greetings';
import ProfileContainer from './components/main/ProfileContainer';
import Projects from './components/main/Projects/Projects';
import ScrollToTopButton from './components/main/ScrollToTop';

function App() {
  const currentPath = window.location.pathname;
  console.log(currentPath);
  let value;
  if (currentPath === '/') {
    value = (
      <>
        {' '}
        <Greetings />
        {/* <ScrollToTopButton/> */}
        <ProfileContainer />
        <About />
        <Qualification />
      </>
    );
  } else if (currentPath === '/project') {
    value = <Projects />;
  }

  return (
    <div className={classes.App}>
      <header className={classes.appHeader}>
        <Navbar />
      </header>
      <main>
        <div className={classes.backgroundImage}>
          <div className={classes.gradientOverlay}>
            {' '}
            <ScrollToTopButton />
            {value}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
