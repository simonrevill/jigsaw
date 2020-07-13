import React from 'react';
import { connect } from 'react-redux';
import { getUserPreferences } from '../../redux/selectors/users';
import toggleDarkMode from '../../redux/actions/users/toggleDarkMode';
import { updateDatabase } from '../../aws/dynamodb_updateData';

import Slider from '../Slider/Slider';
import { ReactComponent as JigsawTopbarLogo } from '../../icons/jigsaw-topbar-logo.svg';
import '../../scss/bem/Topbar.scss';

const Topbar = ({ currentUserInfo, darkMode, toggleDarkMode }) => {

  // Toggle body class for colour theme:

  darkMode ?
    document.body.classList.remove('light-theme') :
    document.body.classList.add('light-theme');

  const { userId } = currentUserInfo;

  const handleClick = () => {
    toggleDarkMode();
    updateDatabase('darkModeOn', userId, darkMode);
  };

  return (
    <div className="topbar">
      <JigsawTopbarLogo
        className="topbar__jigsaw--logo"
      />
      <progress className="uploadProgress" value='0'></progress>
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