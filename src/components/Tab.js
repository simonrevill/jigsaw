import React from 'react';

import { connect } from 'react-redux';
import {
  ACTIVATE_MY_PROFILE_TAB, ACTIVATE_LIBRARY_TAB,
  ACTIVATE_UPLOAD_TAB, ACTIVATE_SETTINGS_TAB,
  ACTIVATE_BOARD_TAB
} from '../redux/constants/actionTypes';
import activateTab from '../redux/actions/uiState/activateTab';

import { ReactComponent as LibraryIcon } from '../icons/library.svg';
import { ReactComponent as UploadIcon } from '../icons/upload.svg';
import { ReactComponent as SettingsIcon } from '../icons/settings.svg';
import { ReactComponent as BoardIcon } from '../icons/board.svg';

import '../scss/bem/Tab.scss';

const Tab = ({ currentUserInfo, title, isActive, activateTab }) => {

  const { userName } = currentUserInfo;

  const handleClick = e => {
    const targetTab = e.currentTarget.title;
    switch (targetTab) {
      case 'My Profile':
        activateTab(ACTIVATE_MY_PROFILE_TAB, targetTab);
        break;
      case 'Library':
        activateTab(ACTIVATE_LIBRARY_TAB, targetTab);
        break;
      case 'Upload':
        activateTab(ACTIVATE_UPLOAD_TAB, targetTab);
        break;
      case 'Settings':
        activateTab(ACTIVATE_SETTINGS_TAB, targetTab);
        break;
      case 'Board':
        activateTab(ACTIVATE_BOARD_TAB, targetTab);
        break;
      default:
        return;
    }
  };

  const renderTabIcon = title => {
    switch (title) {
      case 'Library':
        return <LibraryIcon className="tab__icon" alt="Library" />;
      case 'Upload':
        return <UploadIcon className="tab__icon" alt="Upload" />;
      case 'Settings':
        return <SettingsIcon className="tab__icon" alt="Settings" />;
      case 'Board':
        return <BoardIcon className="tab__icon" alt="Board" />;
      default:
        return;
    }
  };

  return (
    <div className={isActive ? 'tab tab--selected' : 'tab'} onClick={handleClick} title={title}>
      {
        title === "My Profile" ?
          <img src={require(`../image-library/users/${userName}/${userName}.jpg`)} className="avatar" alt="Mary Smith" /> :
          null
      }
      {renderTabIcon(title)}
      <p className="tab__title">{title}</p>
    </div>
  );
};

export default connect(
  null,
  { activateTab }
)(Tab);
