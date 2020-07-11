import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import AliceCarousel from 'react-alice-carousel';
import { ReactComponent as CarouselButtonPrev } from '../../icons/carousel-button-prev.svg';
import { ReactComponent as CarouselButtonNext } from '../../icons/carousel-button-next.svg';
import { ReactComponent as GridOverlay4 } from '../../icons/grid-overlay-4.svg';
import { ReactComponent as GridOverlay5 } from '../../icons/grid-overlay-5.svg';
import { ReactComponent as GridOverlay6 } from '../../icons/grid-overlay-6.svg';
import { ReactComponent as GridOverlay7 } from '../../icons/grid-overlay-7.svg';
import { ReactComponent as GridOverlay8 } from '../../icons/grid-overlay-8.svg';
import '../../../node_modules/react-alice-carousel/lib/alice-carousel.css';

import '../../scss/bem/Carousel.scss';

class MainLibraryCarousel extends React.Component {

  render() {

    const { gridSetting, imageLibrary, currentSelectedImage, handlePreviousClick, handleNextClick } = this.props;

    const renderGridOverlay = () => {
      switch (gridSetting) {
        case 0:
          return <div key={gridSetting}></div>;
        case 4:
          return <GridOverlay4 key={gridSetting} />;
        case 5:
          return <GridOverlay5 key={gridSetting} />;
        case 6:
          return <GridOverlay6 key={gridSetting} />;
        case 7:
          return <GridOverlay7 key={gridSetting} />;
        case 8:
          return <GridOverlay8 key={gridSetting} />;
        default:
          return <div key={gridSetting}></div>;
      }
    };


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
          <SwitchTransition>
            <CSSTransition
              key={gridSetting}
              in={true}
              appear
              timeout={75}
              classNames={{
                appear: 'carousel__grid-overlay-grid--appear',
                appearActive: 'carousel__grid-overlay-grid--appear-active',
                appearDone: 'carousel__grid-overlay-grid--appear-done',
                enter: 'carousel__grid-overlay-grid--enter',
                enterActive: 'carousel__grid-overlay-grid--enter-active',
                enterDone: 'carousel__grid-overlay-grid--enter-done',
                exit: 'carousel__grid-overlay-grid--exit',
                exitActive: 'carousel__grid-overlay-grid--exit-active',
                exitDone: 'carousel__grid-overlay-grid--exit-done',
              }}
            >
              {renderGridOverlay(gridSetting)}
            </CSSTransition>
          </SwitchTransition>
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