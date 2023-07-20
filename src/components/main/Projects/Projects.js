import ProjectUnit from './ProjectUnit';
import classes from './Projects.module.css';
const DEFAULT_PROJECT = [
  {
    name: 'Aquastar',
    description:
      '"AquaStar" - an exceptional ecommerce web application revolutionizing your online shopping experience. With intuitive modules for effortless purchasing, streamlined stock management, secure payments, and a powerful admin section, AquaStar offers a refreshing and reliable platform. Dive into AquaStar for a world of convenience and excellence in online shopping.',
    tech: 'ReactJS,ExpressJS, NodeJS, MongoDB,Bootstrap',
    link: 'https://github.com/Rahulnair1234/aquastar',
  },
  {
    name: 'Skinsy',
    description:
      '"Skinsy" - your smart skin health companion. This mobile app uses advanced deep learning to identify skin diseases from images. Snap a photo, get quick results, and proactively care for your skin. Rest assured, your privacy is protected. Join Skinsy now for convenient and reliable skin health monitoring.',
    tech: 'Python , Android, Firebase, Java, Tensorflow',
    link: 'https://github.com/Rahulnair1234/Skinsyapplication',
  },
  {
    name: 'Bento Box',
    description:
      '"Bento Box" - the ultimate food ordering web application that brings a delectable array of cuisines to your fingertips. With Bento Box, explore a diverse selection of restaurants, build your personalized bento box with ease, and manage your orders effortlessly. Our user-friendly interface ensures a seamless and delightful food ordering experience. Customize your bento box, track your order in real-time, and securely process payments, all in one place. Embrace the culinary adventure with Bento Box and savor the flavors of your favorite meals, delivered straight to your doorstep. Simplify your food journey with Bento Box, your ultimate companion for a delightful and satisfying dining experience.',
    tech: 'ReactJS, FireBase ',
    link: 'https://codesandbox.io/s/github/Rahulnair1234/food-order-app',
  },
];

const Projects = () => {
  const units = DEFAULT_PROJECT.map((item) => {
    return <ProjectUnit item={item} />;
  });
  return (
    <>
      <div className={classes.title}>
        Featured Projects: Bringing Ideas to Life
      </div>
      <div className={classes.ProjectsContainer}>{units}</div>
    </>
  );
};
export default Projects;
