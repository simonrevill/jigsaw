import React from 'react';
import { ReactComponent as CarouselButtonPrev } from '../../icons/carousel-button-prev.svg';
import { ReactComponent as CarouselButtonNext } from '../../icons/carousel-button-next.svg';
import MainLibraryCarousel from '../MainLibraryCarousel/MainLibraryCarousel';
import "../../../node_modules/react-alice-carousel/lib/scss/alice-carousel.scss";

import '../../scss/bem/Carousel.scss';

const Carousel = ({ gridSetting, imageLibrary, userImageLibrary, currentSelectedImage, handlePreviousClick, handleNextClick }) => {

  // Carousel needs the name of the currently active library tab!

  // console.log(currentSelectedImage);
  // console.log(imageLibrary);
  // console.log(imageLibrary.length);

  const carouselResponsiveSettings = {
    0: { items: 1 }
  }

  const handleOnDragStart = (e) => e.preventDefault();



  const startingIndex = imageLibrary.findIndex(image => image.id === currentSelectedImage.id);

  console.log(startingIndex);

  return (
    <div className="carousel-container">
      <div className="carousel__browser">
        {/* <div style={{ width: '660px', margin: '0 auto' }}> */}

        <MainLibraryCarousel
          imageLibrary={imageLibrary}
          currentSelectedImage={currentSelectedImage}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
        />

        {/* </div> */}
      </div>
      {/* <div className="carousel__browser-panel">
        <div
          className="carousel__button carousel__button--prev"
          onClick={handlePreviousClick}
        >
          <CarouselButtonPrev />
        </div>
        <div className="carousel__file-name">
          <p className="carousel__file-name-text">{currentSelectedImage.name}</p>
        </div>
        <div
          className="carousel__button carousel-button--next"
          onClick={handleNextClick}
        >
          <CarouselButtonNext />
        </div>
      </div> */}
    </div>
  );
};

export default Carousel;