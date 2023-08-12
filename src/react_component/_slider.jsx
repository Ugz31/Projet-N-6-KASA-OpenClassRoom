import React, { useState } from "react";

function Slider({ images }) {
  // useState(0) car dans un tableau, la numérotation commence a 0
  let [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    // Si on est à la dernière image, ne rien faire (return)
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex((currentImageIndex = 0));
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevSlide = () => {
    // Si on est à la première image, ne rien faire (return)
    if (currentImageIndex === 0) {
      setCurrentImageIndex((currentImageIndex = images.length - 1));
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="slider">
      {images.length === 1 ? "" : <i className="fa-solid fa-chevron-up fa-rotate-270 icon left " onClick={prevSlide}></i>}
      {/* images = tableau & currentImagesIndex sont numero, indexé a 0 */}
      <img src={images[currentImageIndex]} alt="Slide" />
      {images.length === 1 ? "" : <i className="fa-solid fa-chevron-up fa-rotate-90 icon right" onClick={nextSlide}></i>}
      <p>{images.length === 1 ? "" : `${currentImageIndex + 1} / ${images.length}`}</p>
    </div>
  );
}

export default Slider;
