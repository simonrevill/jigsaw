import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { trackVerticalStyles, thumbVerticalStyles, innerThumbStyles } from './scrollbarStyles';
import Image from '../Image/Image';

const renderLibrary = libraryNa(activeTab, me, images) => {

  const totalImages = images.length;

  if (totalImages === 0) {
    return (
      <div
        className={activeTab === libraryName ?
          'image-browser__browser-container image-browser__browser-container--active' :
          'image-browser__browser-container'
        }
      >
        <div className="image-browser__browser">EMPTY</div>
      </div>
    );
  } else if (totalImages < 9) {
    return (
      <div
        className={activeTab === libraryName ?
          'image-browser__browser-container image-browser__browser-container--active' :
          'image-browser__browser-container'
        }
      >
        <div className="image-browser__browser">
          {images.map(image => <Image key={image.name} imageSrc={image.url} imageName={image.name} />)}
        </div>
      </div>
    );
  } else {
    return (
      <Scrollbars
        style={activeTab === libraryName ?
          ({ width: 847, height: 450 }) :
          ({ width: 847, height: 450, display: 'none' })}
        renderTrackHorizontal={props => <div {...props} className="d-none" />}
        renderTrackVertical={props =>
          <div
            {...props}
            style={trackVerticalStyles}
            className="track-vertical"
          />
        }
        renderThumbVertical={props =>
          <div
            {...props}
            style={thumbVerticalStyles}
            className="thumb-vertical"
          >
            <div
              style={innerThumbStyles}
              className="inner-thumb"
            >
            </div>
          </div>
        }
      >
        <div
          className={activeTab === libraryName ?
            'image-browser__browser-container image-browser__browser-container--active' :
            'image-browser__browser-container'
          }
        >
          <div className="image-browser__browser image-browser__browser--scrollbars">
            {images.map(image => <Image key={image.name} imageSrc={image.url} imageName={image.name} />)}
          </div>
        </div>
      </Scrollbars>
    );
  }
};

export default renderLibrary;