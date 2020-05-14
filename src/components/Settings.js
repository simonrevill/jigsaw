import React from 'react';
import { connect } from 'react-redux';
import { getShowBackgroundImage, getShowGridOverlay, getShowCorrectPlacement } from '../redux/selectors/defaultSettings';
import toggleBackgroundImage from '../redux/actions/defaultSettings/toggleBackgroundImage';
import toggleGridOverlay from '../redux/actions/defaultSettings/toggleGridOverlay';
import toggleCorrectPlacement from '../redux/actions/defaultSettings/toggleCorrectPlacement';

import Slider from './Slider';

import '../scss/bem/Settings.scss';

const Settings = ({ isActive, showBackgroundImage, showGridOverlay,
  showCorrectPlacement, toggleBackgroundImage,
  toggleGridOverlay, toggleCorrectPlacement }) => {

  const handleToggleBackgroundImage = () => toggleBackgroundImage();

  const handleToggleGridOverlay = () => toggleGridOverlay();

  const handleToggleCorrectPlacement = () => toggleCorrectPlacement();

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
  const showBackgroundImage = getShowBackgroundImage(state);
  const showGridOverlay = getShowGridOverlay(state);
  const showCorrectPlacement = getShowCorrectPlacement(state);
  return { showBackgroundImage, showGridOverlay, showCorrectPlacement };
};

export default connect(
  mapStateToProps,
  { toggleBackgroundImage, toggleGridOverlay, toggleCorrectPlacement }
)(Settings);