import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { ReactComponent as CarouselButtonPrev } from '../../icons/carousel-button-prev.svg';
import { ReactComponent as CarouselButtonNext } from '../../icons/carousel-button-next.svg';
import { ReactComponent as GridOverlay8 } from '../../icons/grid-overlay-8.svg';
import '../../../node_modules/react-alice-carousel/lib/alice-carousel.css';

import '../../scss/bem/Carousel.scss';

class MainLibraryCarousel extends React.Component {

  render() {


    const { gridSetting, imageLibrary, currentSelectedImage, handlePreviousClick, handleNextClick } = this.props;

    const currentIndex = imageLibrary.findIndex(image => image.id === currentSelectedImage.id);

    return (
      <React.Fragment>
        <AliceCarousel
          mouseTrackingEnabled={true}
          items={imageLibrary.map((image, index) => (
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
            />
          ))}
          dotsDisabled={true}
          duration={150}
          buttonsDisabled={true}
          stagePadding={{ paddingLeft: 253.5, paddingRight: 253.5 }}
          startIndex={currentIndex}
          ref={(el) => (this.Carousel = el)}
        />
        <div className="carousel__grid-overlay">
          <GridOverlay8 />
        </div>
        <div className="carousel__browser-panel">
          <div
            className="carousel__button carousel__button--prev"
            onClick={() => handlePreviousClick(this.Carousel)}
          >
            <CarouselButtonPrev />
          </div>
          <div className="carousel__file-name">
            <p className="carousel__file-name-text">{currentSelectedImage.name}</p>
          </div>
          <div
            className="carousel__button carousel-button--next"
            onClick={() => handleNextClick(this.Carousel)}
          >
            <CarouselButtonNext />
          </div>
        </div>
      </React.Fragment>
    )
  }
};

export default MainLibraryCarousel;