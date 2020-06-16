import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { trackVerticalStyles, thumbVerticalStyles, innerThumbStyles } from './scrollbarStyles';
import BrowserImage from '../BrowserImage/BrowserImage';
import { ReactComponent as Spinner } from '../../icons/spinner.svg';

const renderMainImageLibrary = (activeTab, images) => {

  const totalImages = images.length;

  const renderImages = images => images.map(image => <BrowserImage key={image.id} imageSrc={image.url} imageName={image.name} isFavourite={image.isUserFavourite} />);

  if (totalImages === 0) {
    return (
      <div
        className={activeTab === 'mainLibrary' ?
          'image-browser__browser-container image-browser__browser-container--active' :
          'image-browser__browser-container'
        }
      >
        <div className="image-browser__browser image-browser__browser--empty image-browser__browser--empty-fetching-state">
          <Spinner className="image-browser__spinner" />
          <p className="image-browser__empty-message">
            Fetching image library...
          </p>
        </div>
      </div>
    );
  } else if (totalImages < 9) {
    return (
      <div
        className={activeTab === 'mainLibrary' ?
          'image-browser__browser-container image-browser__browser-container--active' :
          'image-browser__browser-container'
        }
      >
        <div className="image-browser__browser">
          {renderImages(images)}
        </div>
      </div>
    );
  } else {
    return (
      <Scrollbars
        style={activeTab === 'mainLibrary' ?
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
          className={activeTab === 'mainLibrary' ?
            'image-browser__browser-container image-browser__browser-container--active' :
            'image-browser__browser-container'
          }
        >
          <div className="image-browser__browser image-browser__browser--scrollbars">
            {renderImages(images)}
          </div>
        </div>
      </Scrollbars>
    );
  }
};

export default renderMainImageLibrary;