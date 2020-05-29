import React from 'react';
import { connect } from 'react-redux';
import { getUserPreferences } from '../../redux/selectors/users';
import toggleDarkMode from '../../redux/actions/users/toggleDarkMode';
import { updateDatabase } from '../../aws/dynamodb_updateData';

import Slider from '../Slider/Slider';
import '../../scss/bem/Topbar.scss';

const Topbar = ({ currentUserInfo, darkMode, toggleDarkMode }) => {

  const { userId } = currentUserInfo;

  const handleClick = () => {
    toggleDarkMode();
    updateDatabase('darkModeOn', userId, darkMode);
  };

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
  const userPreferences = getUserPreferences(state);
  const darkMode = userPreferences.darkMode;
  return { darkMode };
};

export default connect(
  mapStateToProps,
  { toggleDarkMode }
)(Topbar);