import React from 'react';
import { ReactComponent as CarouselButtonPrev } from '../../icons/carousel-button-prev.svg';
import { ReactComponent as CarouselButtonNext } from '../../icons/carousel-button-next.svg';
import '../../scss/bem/Carousel.scss';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel__browser"></div>
      <div className="carousel__browser-panel">
        <div className="carousel__button carousel__button--prev">
          <CarouselButtonPrev />
        </div>
        <div className="carousel__file-name">
          <p className="carousel__file-name-text">tower-restaurant.jpg</p>
        </div>
        <div className="carousel__button carousel-button--next">
          <CarouselButtonNext />
        </div>
      </div>
    </div>
  );
};

export default Carousel;