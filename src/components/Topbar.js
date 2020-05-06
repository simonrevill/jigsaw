import React from 'react';
import { connect } from 'react-redux';
import { getDarkMode } from '../redux/selectors/selectors';

import Slider from './Slider';

const Topbar = ({ darkMode }) => {
  return (
    <div className="topbar">
      <Slider sliderLabel="Dark Mode:" showSliderState={true} sliderState={darkMode} />
    </div>
  );
};

const mapStateToProps = state => {
  const { darkMode } = getDarkMode(state);
  return { darkMode };
};

export default connect(mapStateToProps)(Topbar);