import React from 'react';
import { ReactComponent as CarouselButtonPrev } from '../../icons/carousel-button-prev.svg';
import { ReactComponent as CarouselButtonNext } from '../../icons/carousel-button-next.svg';
import AliceCarousel from 'react-alice-carousel'
import "../../../node_modules/react-alice-carousel/lib/scss/alice-carousel.scss";
import '../../scss/bem/Carousel.scss';

const Carousel = ({ gridSetting, imageLibrary, userImageLibrary, currentSelectedImage }) => {

  // Carousel needs the name of the currently active library tab!

  console.log(currentSelectedImage);
  console.log(imageLibrary);
  console.log(imageLibrary.length);

  const carouselResponsiveSettings = {
    0: { items: 1 }
  }

  const handleOnDragStart = (e) => e.preventDefault();

  const handlePreviousClick = () => console.log('previous image button clicked...');
  const handleNextClick = () => console.log('next image button clicked...');

  const startingIndex = imageLibrary.findIndex(image => image.id === currentSelectedImage.id);

  console.log(startingIndex);

  return (
    <div className="carousel-container">
      <div className="carousel__browser">
        <AliceCarousel
          mouseTrackingEnabled
          items={imageLibrary}
          dotsDisabled={true}
          responsive={carouselResponsiveSettings}
          buttonsDisabled={true}
          startIndex={startingIndex}
        >
          {
            imageLibrary.map((image, index) => (
              <div
                key={image.id}
                className={image.id === currentSelectedImage.id ? 'carousel__image carousel__image--selected' : 'carousel__image'}
                style={{
                  backgroundImage: `url("${image.url}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  width: '330px',
                  height: '330px',
                  display: 'inline-block'
                }}
                onDragStart={handleOnDragStart}
              />
            ))
          }
        </AliceCarousel>
      </div>
      <div className="carousel__browser-panel">
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
      </div>
    </div>
  );
};

export default Carousel;