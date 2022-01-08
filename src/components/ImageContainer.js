import Image from './Image';

function ImageContainer({ images, onImageDelete }) {
  const renderImages = (images) => {
    if (!images) return null;
    return images.map((image, index) => {
      return <Image key={index} image={image} onImageDelete={onImageDelete} />;
    });
  };

  return <div className="image-container">{renderImages(images)}</div>;
}

export default ImageContainer;
