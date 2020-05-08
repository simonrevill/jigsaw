import React from 'react';
import { connect } from 'react-redux';
import { getShowBackgroundImage, getShowGridOverlay, getShowCorrectPlacement } from '../redux/selectors/defaultSettings';
import {
  SHOW_BACKGROUND_IMAGE_OFF, SHOW_BACKGROUND_IMAGE_ON,
  SHOW_GRID_OVERLAY_OFF, SHOW_GRID_OVERLAY_ON,
  SHOW_CORRECT_PLACEMENT_OFF, SHOW_CORRECT_PLACEMENT_ON
} from '../redux/constants/actionTypes';
import toggleShowBackgroundImage from '../redux/actions/defaultSettings/toggleShowBackgroundImage';
import toggleShowGridOverlay from '../redux/actions/defaultSettings/toggleShowGridOverlay';
import toggleShowCorrectPlacement from '../redux/actions/defaultSettings/toggleShowCorrectPlacement';

import Slider from './Slider';

import '../scss/bem/Settings.scss';

const Settings = ({ showBackgroundImage, showGridOverlay,
  showCorrectPlacement, toggleShowBackgroundImage,
  toggleShowGridOverlay, toggleShowCorrectPlacement }) => {

  const handleShowBackgroundImage = () => {
    showBackgroundImage ?
      toggleShowBackgroundImage(SHOW_BACKGROUND_IMAGE_OFF) :
      toggleShowBackgroundImage(SHOW_BACKGROUND_IMAGE_ON);
  };

  const handleShowGridOverlay = () => {
    showGridOverlay ?
      toggleShowGridOverlay(SHOW_GRID_OVERLAY_OFF) :
      toggleShowGridOverlay(SHOW_GRID_OVERLAY_ON);
  };

  const handleShowCorrectPlacement = () => {
    showCorrectPlacement ?
      toggleShowCorrectPlacement(SHOW_CORRECT_PLACEMENT_OFF) :
      toggleShowCorrectPlacement(SHOW_CORRECT_PLACEMENT_ON);
  };

  return (
    <div className="settings">
      <div className="settings__inner">
        <h2 className="settings__title">Difficulty:</h2>
        <Slider
          sliderLabel="Show background image"
          showSliderState={false}
          sliderState={showBackgroundImage}
          onClick={handleShowBackgroundImage}
        />
        <Slider
          sliderLabel="Show grid overlay"
          showSliderState={false}
          sliderState={showGridOverlay}
          onClick={handleShowGridOverlay}
        />
        <Slider
          sliderLabel="Show correct placement"
          showSliderState={false}
          sliderState={showCorrectPlacement}
          onClick={handleShowCorrectPlacement}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const showBackgroundImage = getShowBackgroundImage(state);
  const showGridOverlay = getShowGridOverlay(state);
  const showCorrectPlacement = getShowCorrectPlacement(state);
  return { showBackgroundImage, showGridOverlay, showCorrectPlacement };
};

export default connect(
  mapStateToProps,
  { toggleShowBackgroundImage, toggleShowGridOverlay, toggleShowCorrectPlacement }
)(Settings);