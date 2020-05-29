import React from 'react';
import { connect } from 'react-redux';
import { getUserPreferences } from '../../redux/selectors/users';
import toggleBackgroundImage from '../../redux/actions/users/toggleBackgroundImage';
import toggleGridOverlay from '../../redux/actions/users/toggleGridOverlay';
import toggleCorrectPlacement from '../../redux/actions/users/toggleCorrectPlacement';
import { updateDatabase } from '../../aws/dynamodb_updateData';

import Slider from '../Slider/Slider';
import '../../scss/bem/Settings.scss';

const Settings = ({ currentUserInfo, isActive, showBackgroundImage, showGridOverlay, showCorrectPlacement, toggleBackgroundImage,
  toggleGridOverlay, toggleCorrectPlacement }) => {

  const { userId } = currentUserInfo;

  const handleToggleBackgroundImage = () => {
    toggleBackgroundImage();
    updateDatabase('showBackgroundImage', userId, showBackgroundImage);
  };

  const handleToggleGridOverlay = () => {
    toggleGridOverlay();
    updateDatabase('showGridOverlay', userId, showGridOverlay);
  };

  const handleToggleCorrectPlacement = () => {
    toggleCorrectPlacement();
    updateDatabase('showCorrectPlacement', userId, showCorrectPlacement);
  };

  return (
    <div className={isActive ? "settings d-block" : "settings d-none"}>
      <div className="settings__inner">
        <h2 className="settings__title">Difficulty:</h2>
        <Slider
          sliderLabel="Show background image"
          showSliderState={false}
          sliderState={showBackgroundImage}
          onClick={handleToggleBackgroundImage}
        />
        <Slider
          sliderLabel="Show grid overlay"
          showSliderState={false}
          sliderState={showGridOverlay}
          onClick={handleToggleGridOverlay}
        />
        <Slider
          sliderLabel="Show correct placement"
          showSliderState={false}
          sliderState={showCorrectPlacement}
          onClick={handleToggleCorrectPlacement}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const userPreferences = getUserPreferences(state);
  const showBackgroundImage = userPreferences.difficulty.showBackgroundImage;
  const showGridOverlay = userPreferences.difficulty.showGridOverlay;
  const showCorrectPlacement = userPreferences.difficulty.showCorrectPlacement;

  return { showBackgroundImage, showGridOverlay, showCorrectPlacement };
};

export default connect(
  mapStateToProps,
  { toggleBackgroundImage, toggleGridOverlay, toggleCorrectPlacement }
)(Settings);