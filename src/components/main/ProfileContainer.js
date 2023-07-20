import ImageContainer from './ImageContainer';
import classes from './ProfileContainer.module.css';
import ProfileData from './Profiledata';

const ProfileContainer = () => {
  return (
   
      <div className={classes.section2}>
        <ProfileData />
        <ImageContainer />
      </div>

  );
};
export default ProfileContainer;
