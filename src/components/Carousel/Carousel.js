import React from 'react';
import { ReactComponent as CarouselButtonPrev } from '../../icons/carousel-button-prev.svg';
import { ReactComponent as CarouselButtonNext } from '../../icons/carousel-button-next.svg';
import MainLibraryCarousel from '../MainLibraryCarousel/MainLibraryCarousel';
import "../../../node_modules/react-alice-carousel/lib/scss/alice-carousel.scss";

import '../../scss/bem/Carousel.scss';

const Carousel = ({ gridSetting, imageLibrary, userImageLibrary, currentSelectedImage, handlePreviousClick, handleNextClick }) => {

  // Carousel needs the name of the currently active library tab!

  const handleOnDragStart = (e) => e.preventDefault();

  const startingIndex = imageLibrary.findIndex(image => image.id === currentSelectedImage.id);

  console.log(startingIndex);

  return (
    <div className="carousel-container">
      <div className="carousel__browser">
        <MainLibraryCarousel
          gridSetting={gridSetting}
          imageLibrary={imageLibrary}
          currentSelectedImage={currentSelectedImage}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Carousel;