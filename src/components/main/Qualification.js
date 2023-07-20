import classes from './Qualification.module.css';
const Qualification = () => {
  return (
    <div className={classes.qualificationContainer}>
      <span>Qualifications</span>

      <div>
        <p className={classes.label}>
          {' '}
          10th Standard: National English High School, Virar, Mumbai
        </p>
        <p>Percentage:89%</p>
        <p>
          {' '}
          Description: Embarked on an educational journey at National English
          High School, where I cultivated a strong foundation of knowledge and
          acquired valuable academic skills. Achieved an impressive percentage
          of 89%, showcasing dedication and commitment to academic excellence.
        </p>
      </div>
      <br />
      <div>
        <p className={classes.label}>
          12th Standard: Viva College Virar, Mumbai
        </p>
        <p>
          Subject Specialization: Science (PCM - Physics, Chemistry,
          Mathematics){' '}
        </p>
        <p>Percentage: 89.68% </p>
        <p>
          Description: Advanced my educational pursuit in the field of Science,
          specializing in Physics, Chemistry, and Mathematics (PCM) at Viva
          College. Embraced a rigorous curriculum, delving into the fascinating
          realms of scientific principles and mathematical problem-solving.
          Achieved an exceptional percentage of 89.68%, highlighting a strong
          grasp of the subject matter and a passion for scientific exploration.
        </p>
      </div>
      <br />
      <div>
        <p className={classes.label}>
          Bachelor's Degree: Bhavans College, Andheri West, Mumbai
        </p>
        <p> Degree: Bachelor of Computer Science </p>
        <p> CGPA: 9.81 </p>
        <p>
          {' '}
          Description: Pursued a Bachelor's degree in Computer Science from
          Bhavans College, Andheri West. Throughout this transformative journey,
          I not only expanded my technical expertise but also honed essential
          problem-solving and critical thinking abilities. Achieved an
          outstanding CGPA of 9.81, a testament to perseverance, diligence, and
          a genuine passion for the subject.
        </p>
      </div>
      <br />
      <span>Relevant Courses and Certifications</span>
      <ul>
        <li>
          Node.js, Express, MongoDB & More: The Complete Bootcamp 2023 by Jonas
          Schmedtmann (Online course).
        </li>
        <li>
          React - The Complete Guide 2023 (incl. React Router & Redux) by
          Maximilian Schwarzmüller (Online course).
        </li>
        <li>Crash Course on Python by Google (Online course).</li>
      </ul>
    </div>
  );
};
export default Qualification;
