import React from 'react';
import { connect } from 'react-redux';
import renderMainImageLibrary from './renderMainImageLibrary';
import renderUserImageLibrary from './renderUserImageLibrary';
import { getActiveImageBrowserTabName, getMenuIsOpen } from '../../redux/selectors/uiState';
import setActiveTab from '../../redux/actions/uiState/setActiveTab';
import toggleMenu from '../../redux/actions/uiState/toggleMenu';
import setActiveImageBrowserTab from '../../redux/actions/uiState/setActiveImageBrowserTab';
import '../../scss/bem/ImageBrowser.scss';

const ImageBrowser = ({
  currentUserInfo, menuIsOpen, imageLibrary, userImageLibrary,
  activeImageBrowserTabName, setActiveImageBrowserTab, setActiveTab, toggleMenu }) => {

  console.log('imageLibrary: ', imageLibrary);
  console.log('userImageLibrary: ', userImageLibrary);
  console.log('user favourites: ', currentUserInfo.favourites);

  const handleTabClick = e => setActiveImageBrowserTab(e.currentTarget.dataset.tabname);

  const handleUploadButtonClick = () => {
    if (!menuIsOpen) toggleMenu();
    setActiveTab('Upload');
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
      {renderMainImageLibrary(activeImageBrowserTabName, imageLibrary)}
      {renderUserImageLibrary(activeImageBrowserTabName, userImageLibrary, handleUploadButtonClick)}
    </div>
  );
};

const mapStateToProps = state => {
  const menuIsOpen = getMenuIsOpen(state);
  const activeImageBrowserTabName = getActiveImageBrowserTabName(state);
  return { activeImageBrowserTabName, menuIsOpen };
};

export default connect(
  mapStateToProps,
  { setActiveImageBrowserTab, setActiveTab, toggleMenu }
)(ImageBrowser, setActiveTab);