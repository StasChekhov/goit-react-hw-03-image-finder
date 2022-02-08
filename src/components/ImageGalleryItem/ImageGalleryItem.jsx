import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, largeImage, showImage  }) => {
   
    return (
        
        <li className={s.galleyItem} onClick={()=> showImage(largeImage)}>
            <img className={s.image} src={image} alt="" />
        </li>
            
        
     );
}
 
export default ImageGalleryItem;