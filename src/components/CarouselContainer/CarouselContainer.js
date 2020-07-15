import React from 'react';
import Carousel from '../Carousel/Carousel';
import "../../../node_modules/react-alice-carousel/lib/scss/alice-carousel.scss";

import '../../scss/bem/Carousel.scss';

const CarouselContainer = ({ gridSetting, activeImageBrowserTabName, imageLibrary, userImageLibrary, currentSelectedImage, handlePreviousClick, handleNextClick }) => {

  // Carousel needs the name of the currently active library tab!

  console.log('currentActiveLibrary: ', activeImageBrowserTabName);

  const handleOnDragStart = (e) => e.preventDefault();

  const startingIndex = imageLibrary.findIndex(image => image.id === currentSelectedImage.id);

  console.log(startingIndex);

  return (
    <div className="carousel-container">
      <div className="carousel__browser">
        <div className={activeImageBrowserTabName === 'mainLibrary' ? 'd-block' : 'd-none'}>
          <Carousel
            gridSetting={gridSetting}
            imageLibrary={imageLibrary}
            libraryName="mainLibrary"
            currentSelectedImage={currentSelectedImage}
            handlePreviousClick={handlePreviousClick}
            handleNextClick={handleNextClick}
          />
        </div>
        <div className={activeImageBrowserTabName === 'userLibrary' ? 'd-block' : 'd-none'}>
          <Carousel
            gridSetting={gridSetting}
            imageLibrary={userImageLibrary}
            libraryName="userLibrary"
            currentSelectedImage={currentSelectedImage}
            handlePreviousClick={handlePreviousClick}
            handleNextClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselContainer;