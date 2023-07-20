import { useEffect } from 'react';
import classes from './ProfileData.module.css';
import Typed from 'typed.js';
const ProfileData = () => {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: [
        'ReactJS developer!',
        'nodeJS Developer!',
        'MongoDb developer!',
        'Python developer!',
        'Java Developer!',
        'Android Developer!'
      ],
      typeSpeed: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={classes.leftSection}>
      <div>
        {' '}
        Hi, my name is <br />
        <span className={classes.colorName}>Rahul Nair</span>
      </div>
      <div>and i am a passionate </div>
      <span id='element'></span>
    </div>
  );
};
export default ProfileData;
