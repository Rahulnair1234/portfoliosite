import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.aboutContainer} id='about-section'>
      <div>
        <span>About Me:</span>
        <br />
        Hi there! I'm Rahul, a passionate web developer with a strong focus on
        creating dynamic and innovative websites. I have a keen interest in
        exploring various frameworks and technologies in web development.
      </div>
      <br />
      <div>
        <span>My Journey:</span>
        <br />
        With experience in the MERN stack (MongoDB, Express.js, Node.js, and
        React), I have built robust web applications for small-scale businesses.
        I've also had the pleasure of creating websites for college fests,
        delivering captivating user experiences tailored to specific events.
        Beyond the realm of web development, I've delved into the realm of deep
        learning algorithms, leveraging them to develop an Android app for
        classifying skin diseases. This cross-disciplinary approach has allowed
        me to expand my skill set and tackle diverse challenges.
      </div>
      <br />
      <div>
        <span>Strengths:</span>
        <br />
        As a smart worker, I find joy in coding and solving complex bugs. I
        excel in prompt engineering, ensuring timely delivery and attention to
        detail in every project I undertake.
      </div>
      <br />
      <div>
        <span>Passion for Learning:</span>
        <br />
        One of my defining qualities is my fascination with technology. I am
        always eager to learn new technologies, staying updated with the latest
        advancements in the field. This enthusiasm enables me to embrace
        cutting-edge tools and frameworks, ensuring I deliver the best solutions
        to clients. If you're looking for a dedicated and versatile web
        developer who loves to stay on the forefront of technology, I'm here to
        bring your ideas to life.
      </div>
      <br />
    </div>
  );
};
export default About;
