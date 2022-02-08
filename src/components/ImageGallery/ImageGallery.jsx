import s from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';


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

export default ImageGallery ;