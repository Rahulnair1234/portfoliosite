import classes from "./ImageContainer.module.css"
import userPic from "../../assets/images/portFolioPicTransparent.png"
const ImageContainer=()=>{
    return(
        <div className={classes.imageContainer}>
            <img src={userPic} alt="" srcset="" />
        </div>
    )

}
export default ImageContainer;