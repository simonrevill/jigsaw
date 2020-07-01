import React from 'react';
import { ReactComponent as CarouselButtonPrev } from '../../icons/carousel-button-prev.svg';
import { ReactComponent as CarouselButtonNext } from '../../icons/carousel-button-next.svg';
import '../../scss/bem/Carousel.scss';

const Carousel = ({ gridSetting, imageLibrary, userImageLibrary, currentSelectedImage }) => {

  // Carousel needs the name of the currently active library tab!

  console.log(currentSelectedImage);
  console.log(imageLibrary);
  console.log(imageLibrary.length);

  const containerWidth = imageLibrary.length * 330;

  console.log(containerWidth);

  return (
    <div className="carousel-container">
      <div className="carousel__browser">
        <div className="carousel__browser-image-container" style={{ width: `${containerWidth}px` }}>
          {
            imageLibrary.map((image, index) => (
              <div
                key={image.id}
                className="carousel__image"
                style={{
                  backgroundImage: `url("${image.url}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  width: '330px',
                  height: '330px',
                  display: 'inline-block'
                }}
              />
            ))
          }
        </div>
      </div>
      <div className="carousel__browser-panel">
        <div className="carousel__button carousel__button--prev">
          <CarouselButtonPrev />
        </div>
        <div className="carousel__file-name">
          <p className="carousel__file-name-text">{currentSelectedImage.name}</p>
        </div>
        <div className="carousel__button carousel-button--next">
          <CarouselButtonNext />
        </div>
      </div>
    </div>
  );
};

export default Carousel;