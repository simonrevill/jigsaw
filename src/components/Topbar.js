import React from 'react';

import { connect } from 'react-redux';
import { getDarkMode } from '../redux/selectors/defaultSettings';
import toggleDarkMode from '../redux/actions/defaultSettings/toggleDarkMode';

import Slider from './Slider';
import '../scss/bem/Topbar.scss';

const Topbar = ({ darkMode, toggleDarkMode }) => {

  const handleClick = () => toggleDarkMode();

  return (
    <div className="topbar">
      <Slider
        sliderLabel="Dark Mode:"
        showSliderState={true}
        sliderState={darkMode}
        onClick={handleClick}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const darkMode = getDarkMode(state);
  return { darkMode };
};

export default connect(
  mapStateToProps,
  { toggleDarkMode }
)(Topbar);