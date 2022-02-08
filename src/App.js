import { Component } from 'react';
import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

import Searchbar from './components/Searchbar';



export default class App extends Component {
  state = {
    photoName: '',
    images: [],
    loading: false,
    largeImage: '',
    page: 1,
  }
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.photoName;
    const nextName = this.state.photoName;

    if ((prevName !== nextName) && !this.state.loading) {  
      this.setState({loading:true})

      fetch(`https://pixabay.com/api/?q=${this.state.photoName}&page=${this.state.page}&key=25514627-ce86075d369dfb00c77a4eeac&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(res => { 
          const images = res.hits.map(({ id, largeImageURL, webformatURL }) => ({ id, largeImageURL, webformatURL }));
          this.setState({images})
        })
        .finally(()=> this.setState({loading:false}))
      }

      // .then(res => res.data.hits.map(({id, webformatURL, largeImageURL})=> ({id, webformatURL, largeImageURL})))
  }
  searchbarFormSubmit = (photoName) => {
    this.setState({ photoName });
    
  }
  onOpenImage = state => {
    this.setState({ largeImage: state })
  }

  render() {
    
    return (
      <>
        <Searchbar onSubmit={this.searchbarFormSubmit} />
        <ImageGallery
          images={this.state.images}
          open={this.onOpenImage}
          
          // id={ id }
          // previewURL={ previewURL }
          // webformatURL={ webformatURL }
        />
        {this.state.loading && <Loader />}
        {this.state.largeImage && <Modal
          image={this.state.largeImage}
          onClose={this.onOpenImage}
        />}
        <Button/>
      </>
    );
  }
}


