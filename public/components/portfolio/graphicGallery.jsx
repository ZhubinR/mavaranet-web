const GraphicGallery = ({ images }) => {
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
        </div>
    );
};

export default GraphicGallery;