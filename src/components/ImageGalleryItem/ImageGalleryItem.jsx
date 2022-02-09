import s from './ImageGalleryItem.module.css';
import PropTypes from "prop-types";

const ImageGalleryItem = ({ image, largeImage, showImage  }) => {
   
    return (
        
        <li className={s.galleyItem} onClick={()=> showImage(largeImage)}>
            <img className={s.image} src={image} alt="" />
        </li>
            
        
     );
}
 
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  showImage: PropTypes.func.isRequired,
  
};