import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { trackVerticalStyles, thumbVerticalStyles, innerThumbStyles } from './scrollbarStyles';
import '../../scss/bem/ImageBrowser.scss';

const ImageBrowser = ({ currentUserInfo, favourites, userFavourites }) => {

  let totalFavouriteImages = favourites.length + userFavourites.length;
  // totalFavouriteImages = 0;

  const handleTabClick = e => {
    const currentTab = e.currentTarget;
    const otherTab = [...currentTab.parentNode.children].filter(tab => tab !== currentTab);
    otherTab.forEach(tab => tab.classList.remove('image-browser__tab-active'));
    currentTab.classList.add('image-browser__tab-active');
  };

  const renderImageBrowser = totalImages => {
    if (totalImages === 0) {
      return (
        <div className="image-browser__browser-container">
          <div className="image-browser__browser">EMPTY</div>
        </div>
      );
    } else if (totalImages < 9) {
      return (
        <div className="image-browser__browser-container">
          <div className="image-browser__browser"></div>
        </div>
      );
    } else {
      return (
        <Scrollbars
          style={{ width: 847, height: 450 }}
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
          <div className="image-browser__browser-container">
            <div className="image-browser__browser image-browser__browser--scrollbars">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
        </Scrollbars>
      );
    }
  };

  return (
    <div className="image-browser">
      <div className="image-browser__tabs">
        <div className="image-browser__tab image-browser__tab-active" onClick={handleTabClick}>
          <p className="image-browser__tab-title">Main Library</p>
        </div>
        <div className="image-browser__tab-separator"></div>
        <div className="image-browser__tab" onClick={handleTabClick}>
          <p className="image-browser__tab-title">User Library</p>
        </div>
      </div>
      {renderImageBrowser(totalFavouriteImages)}
    </div>
  );
};

export default ImageBrowser;