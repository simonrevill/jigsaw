import React from 'react';
import { connect } from 'react-redux';
import Preview from '../Preview/Preview';
import BoardSetup from '../BoardSetup/BoardSetup';
import { getGridSetting, getCurrentSelectedImage } from '../../redux/selectors/uiState';
import setGridSetting from '../../redux/actions/uiState/setGridSetting';
import '../../scss/bem/Library.scss';

const Library = ({ currentUserInfo, isActive, imageLibrary, userImageLibrary, setGridSetting, currentSelectedImage, gridSetting }) => {

  // Library needs the currently active library tab for the carousel!

  const handleGridSettingClick = e => setGridSetting(parseInt(e.currentTarget.dataset.gridsetting));

  return (
    <div className={isActive ? 'library d-flex' : 'library d-none'}>
      <Preview
        currentUserInfo={currentUserInfo}
        imageLibrary={imageLibrary}
        userImageLibrary={userImageLibrary}
        gridSetting={gridSetting}
        currentSelectedImage={currentSelectedImage}
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
  return { gridSetting, currentSelectedImage };
};

export default connect(
  mapStateToProps,
  { setGridSetting }
)(Library);