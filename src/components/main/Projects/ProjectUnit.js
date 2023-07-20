import classes from './ProjectUnit.module.css';

const ProjectUnit = (props) => {
  return (
    <div className={classes.projectUnit}>
      <div className={classes.unitName}>{props.item.name}</div>
      <br />
      <div className={classes.unitDescription}>
        Description:{props.item.description}
      </div>
      <br />
      <div className={classes.techUsed}>Tech Used: {props.item.tech}</div>
      <br />
      <div className={classes.linkTowebsite}>
        link:<a href={props.item.link}> View Project </a>
      </div>
      <br />
    </div>
  );
};
export default ProjectUnit;
