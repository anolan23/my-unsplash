function Image({ image, onImageDelete }) {
  const { url, label, id } = image;

  return (
    <div className="image-item">
      <img className="image-item__image" src={url} alt="masonry item" />
      <label className="image-item__label">{label}</label>
      <button className="image-item__button" onClick={() => onImageDelete(id)}>
        delete
      </button>
    </div>
  );
}

export default Image;
