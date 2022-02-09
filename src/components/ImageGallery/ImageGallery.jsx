import s from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from "prop-types";

const ImageGallery = ({ images, open }) => {
    
    return (
        <ul className={s.gallery}>
            {images.map(({id, webformatURL, largeImageURL}) => (
                
                <ImageGalleryItem
                    image={webformatURL}
                    largeImage={largeImageURL}
                    key={id}
                    showImage={open}
                />
                ))
            }
        </ul>
        
    );
    
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  open: PropTypes.func.isRequired,
};