import React from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { trackVerticalStyles, thumbVerticalStyles, innerThumbStyles } from './scrollbarStyles';
import { getActiveImageBrowserTabName } from '../../redux/selectors/uiState';
import setActiveImageBrowserTab from '../../redux/actions/uiState/setActiveImageBrowserTab';
import '../../scss/bem/ImageBrowser.scss';

const ImageBrowser = ({ currentUserInfo, favourites, userFavourites, activeImageBrowserTabName, setActiveImageBrowserTab }) => {

  console.log('activeImageBrowserTabName: ', activeImageBrowserTabName);

  /*
  
  Todo:

  Remove favourites and userFavourites from props.
  Replace with relevant S3 data:
  - Main Image Library
  - User Image Library

  The following variables 'totalLibraryImages' and 'totalUserLibraryImages'
  should be measuring the length of these instead (not favourites!).

  Refactor non-DRY code:

  'renderMainLibraryImageBrowser' and 'renderUserLibraryImageBrowser'
  functions can be refactored as they are duplicates.
  Just pass in the 'libraryName' parameter!
  
  */

  let totalLibraryImages = favourites.length;
  let totalUserLibraryImages = userFavourites.length;

  const handleTabClick = e => setActiveImageBrowserTab(e.currentTarget.dataset.tabname);

  const renderMainLibraryImageBrowser = totalImages => {
    if (totalImages === 0) {
      return (
        <div
          className={activeImageBrowserTabName === 'mainLibrary' ?
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
          className={activeImageBrowserTabName === 'mainLibrary' ?
            'image-browser__browser-container image-browser__browser-container--active' :
            'image-browser__browser-container'
          }
        >
          <div className="image-browser__browser">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      );
    } else {
      return (
        <Scrollbars
          style={activeImageBrowserTabName === 'mainLibrary' ?
            ({ width: 847, height: 450 }) :
            ({ width: 847, height: 450, display: 'none' })}
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
            className={activeImageBrowserTabName === 'mainLibrary' ?
              'image-browser__browser-container image-browser__browser-container--active' :
              'image-browser__browser-container'
            }
          >
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
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
        </Scrollbars>
      );
    }
  };

  const renderUserLibraryImageBrowser = totalImages => {
    if (totalImages === 0) {
      return (
        <div
          className={activeImageBrowserTabName === 'userLibrary' ?
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
          className={activeImageBrowserTabName === 'userLibrary' ?
            'image-browser__browser-container image-browser__browser-container--active' :
            'image-browser__browser-container'
          }
        >
          <div className="image-browser__browser">
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
      );
    } else {
      return (
        <Scrollbars
          style={activeImageBrowserTabName === 'userLibrary' ?
            ({ width: 847, height: 450 }) :
            ({ width: 847, height: 450, display: 'none' })}
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
            className={activeImageBrowserTabName === 'userLibrary' ?
              'image-browser__browser-container image-browser__browser-container--active' :
              'image-browser__browser-container'
            }
          >
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
        <div
          className={activeImageBrowserTabName === 'mainLibrary' ? 'image-browser__tab image-browser__tab-active' : 'image-browser__tab'}
          data-tabname="mainLibrary"
          onClick={handleTabClick}
        >
          <p className="image-browser__tab-title">Main Library</p>
        </div>
        <div className="image-browser__tab-separator"></div>
        <div
          className={activeImageBrowserTabName === 'userLibrary' ? 'image-browser__tab image-browser__tab-active' : 'image-browser__tab'}
          data-tabname="userLibrary"
          onClick={handleTabClick}
        >
          <p className="image-browser__tab-title">User Library</p>
        </div>
      </div>
      {renderMainLibraryImageBrowser(totalLibraryImages)}
      {renderUserLibraryImageBrowser(totalUserLibraryImages)}
    </div>
  );
};

const mapStateToProps = state => {
  const activeImageBrowserTabName = getActiveImageBrowserTabName(state);
  return { activeImageBrowserTabName };
};

export default connect(
  mapStateToProps,
  { setActiveImageBrowserTab }
)(ImageBrowser);