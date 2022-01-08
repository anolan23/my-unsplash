import { Component } from 'react';

import { deleteImage } from './model/requests';
import { getImages } from './model/requests';
import Button from './components/Button';
import Search from './components/Search';
import ImageContainer from './components/ImageContainer';
import AddPhotoPopup from './components/AddPhotoPopup';

class App extends Component {
  state = {
    images: [],
    showAddPhotoPopup: false,
  };

  async start() {
    const images = await getImages();
    this.setState({ images });
  }

  onAddImageClick() {
    this.setState({ showAddPhotoPopup: true });
  }

  onImageAdded(image) {
    const newImages = [image, ...this.state.images];
    this.setState({ images: newImages });
  }

  async onImageDelete(id) {
    try {
      const deletedImage = await deleteImage(id);
      const newImages = this.state.images.filter(
        (img) => img.id !== deletedImage.id
      );
      this.setState({ images: newImages });
    } catch (error) {
      console.error(error);
    }
  }

  onSearch(images) {
    this.setState({ images });
  }

  componentDidMount() {
    this.start();
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="header__logo">
            <div className="header__logo__shapes">
              <div className="header__logo__shapes--1"></div>
              <div className="header__logo__shapes--2"></div>
            </div>
            <div className="header__logo__text">
              <h1 className="header__logo__text__main">My Unsplash</h1>
              <span className="header__logo__text__sub">devchallenges.io</span>
            </div>
          </div>
          <Search name="search" onSearch={this.onSearch.bind(this)} />
          <div className="header__action">
            <Button onClick={this.onAddImageClick.bind(this)}>
              Add a photo
            </Button>
          </div>
        </header>
        <ImageContainer
          images={this.state.images}
          onImageDelete={this.onImageDelete.bind(this)}
        />
        <AddPhotoPopup
          show={this.state.showAddPhotoPopup}
          close={() => this.setState({ showAddPhotoPopup: false })}
          onImageAdded={this.onImageAdded.bind(this)}
        />
      </div>
    );
  }
}

export default App;
