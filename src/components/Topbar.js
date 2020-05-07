import React from 'react';

import { connect } from 'react-redux';
import { getDarkMode } from '../redux/selectors/selectors';
import { DARK_MODE_OFF, DARK_MODE_ON } from '../redux/constants/constants';
import toggleDarkMode from '../redux/actions/toggleDarkMode';

import Slider from './Slider';
import '../scss/bem/Topbar.scss';

const Topbar = ({ darkMode, toggleDarkMode }) => {

  const handleClick = () => darkMode ? toggleDarkMode(DARK_MODE_OFF) : toggleDarkMode(DARK_MODE_ON);

  return (
    <div className="topbar">
      <Slider sliderLabel="Dark Mode:" showSliderState={true} sliderState={darkMode} onClick={handleClick} />
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