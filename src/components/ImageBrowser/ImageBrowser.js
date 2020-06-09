import React from 'react';
import { connect } from 'react-redux';
import renderLibrary from './renderLibrary';
import { getActiveImageBrowserTabName } from '../../redux/selectors/uiState';
import setActiveImageBrowserTab from '../../redux/actions/uiState/setActiveImageBrowserTab';
import '../../scss/bem/ImageBrowser.scss';

const ImageBrowser = ({ currentUserInfo, imageLibrary, userImageLibrary, activeImageBrowserTabName, setActiveImageBrowserTab }) => {
  /*
  
  Todo:

  render the userLibrary.
  
  */

  const handleTabClick = e => setActiveImageBrowserTab(e.currentTarget.dataset.tabname);

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
      {renderLibrary(activeImageBrowserTabName, 'mainLibrary', imageLibrary)}
      {renderLibrary(activeImageBrowserTabName, 'userLibrary', userImageLibrary)}
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