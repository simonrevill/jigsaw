import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { trackVerticalStyles, thumbVerticalStyles, innerThumbStyles } from './scrollbarStyles';
import BrowserImage from '../BrowserImage/BrowserImage';
import Button from '../Button/Button';

const renderUserImageLibrary = (activeTab, images, uploadTrigger) => {

  const totalImages = images.length;

  const renderImages = images => images.map(image => <BrowserImage key={image.id} imageSrc={image.url} imageName={image.name} isFavourite={image.isFavourite} />);

  if (totalImages === 0) {
    return (
      <div
        className={activeTab === 'userLibrary' ?
          'image-browser__browser-container image-browser__browser-container--active' :
          'image-browser__browser-container'
        }
      >
        <div className="image-browser__browser image-browser__browser--empty">
          <p className="image-browser__empty-message">
            Oops...
            <br />
            <br />
            It looks like you haven't added any images yet.
          </p>
          <Button
            buttonText={'Upload images'}
            onClick={uploadTrigger}
          />
        </div>
      </div>
    );
  } else if (totalImages < 9) {
    return (
      <div
        className={activeTab === 'userLibrary' ?
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
        style={activeTab === 'userLibrary' ?
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
          className={activeTab === 'userLibrary' ?
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

export default renderUserImageLibrary;