import React from 'react';
import { connect } from 'react-redux';
import Preview from '../Preview/Preview';
import BoardSetup from '../BoardSetup/BoardSetup';
import { getGridSetting, getCurrentSelectedImage, getPreviousLibraryImage, getNextLibraryImage } from '../../redux/selectors/uiState';
import setGridSetting from '../../redux/actions/uiState/setGridSetting';
import { getActiveImageBrowserTabName } from '../../redux/selectors/uiState';
import setCurrentSelectedImage from '../../redux/actions/uiState/setCurrentSelectedImage';
import '../../scss/bem/Library.scss';

const Library = ({ currentUserInfo, isActive, imageLibrary, userImageLibrary, setGridSetting, currentSelectedImage, gridSetting, activeImageBrowserTabName, setCurrentSelectedImage, previousLibraryImageIndex, nextLibraryImageIndex }) => {

  // Library needs the currently active library tab for the carousel!

  const handlePreviousClick = carousel => {
    carousel.slideTo(previousLibraryImageIndex);
    setCurrentSelectedImage({
      id: imageLibrary[previousLibraryImageIndex].id,
      name: imageLibrary[previousLibraryImageIndex].name,
      url: imageLibrary[previousLibraryImageIndex].url,
      library: activeImageBrowserTabName
    });
  };

  const handleNextClick = carousel => {
    carousel.slideTo(nextLibraryImageIndex);
    setCurrentSelectedImage({
      id: imageLibrary[nextLibraryImageIndex].id,
      name: imageLibrary[nextLibraryImageIndex].name,
      url: imageLibrary[nextLibraryImageIndex].url,
      library: activeImageBrowserTabName
    });
  };

  const handleGridSettingClick = e => setGridSetting(parseInt(e.currentTarget.dataset.gridsetting));

  return (
    <div className={isActive ? 'library d-flex' : 'library d-none'}>
      <Preview
        currentUserInfo={currentUserInfo}
        imageLibrary={imageLibrary}
        userImageLibrary={userImageLibrary}
        gridSetting={gridSetting}
        currentSelectedImage={currentSelectedImage}
        handlePreviousClick={handlePreviousClick}
        handleNextClick={handleNextClick}
      />
      <BoardSetup
        currentUserInfo={currentUserInfo}
        gridSetting={gridSetting}
        currentSelectedImage={currentSelectedImage}
        handleGridSettingClick={handleGridSettingClick}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const gridSetting = getGridSetting(state);
  const currentSelectedImage = getCurrentSelectedImage(state);
  const activeImageBrowserTabName = getActiveImageBrowserTabName(state);
  const previousLibraryImageIndex = getPreviousLibraryImage(state);
  const nextLibraryImageIndex = getNextLibraryImage(state);
  return { gridSetting, currentSelectedImage, activeImageBrowserTabName, previousLibraryImageIndex, nextLibraryImageIndex };
};

export default connect(
  mapStateToProps,
  { setGridSetting, setCurrentSelectedImage }
)(Library);