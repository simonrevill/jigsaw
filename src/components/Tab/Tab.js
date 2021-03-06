import React from 'react';

import { connect } from 'react-redux';
// import {
//   ACTIVATE_MY_PROFILE_TAB, ACTIVATE_LIBRARY_TAB,
//   ACTIVATE_UPLOAD_TAB, ACTIVATE_SETTINGS_TAB,
//   ACTIVATE_BOARD_TAB
// } from '../redux/constants/actionTypes';
// import activateTab from '../redux/actions/uiState/activateTab';

import setActiveTab from '../../redux/actions/uiState/setActiveTab';

import { ReactComponent as LibraryIcon } from '../../icons/library.svg';
import { ReactComponent as UploadIcon } from '../../icons/upload.svg';
import { ReactComponent as SettingsIcon } from '../../icons/settings.svg';
import { ReactComponent as BoardIcon } from '../../icons/board.svg';
import { ReactComponent as BlankJigsawUserIcon } from '../../image-library/users/blankJigsawUser/blankJigsawUser.svg';

import '../../scss/bem/Tab.scss';

const Tab = ({ currentUserInfo, title, isActive, menuIsOpen, setActiveTab }) => {
  const { userName } = currentUserInfo;

  const handleClick = e => {
    if (!menuIsOpen) return;
    setActiveTab(e.currentTarget.title);
  };

  const renderProfileAvatar = userName => {
    if (userName === 'blankJigsawUser') return <BlankJigsawUserIcon className="tab__icon" alt={`${userName}`} />;
    return <img src={require(`../../image-library/users/${userName}/${userName}.jpg`)} className="avatar" alt={`${userName}`} />
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
          renderProfileAvatar(userName) :
          null
      }
      {renderTabIcon(title)}
      <p className="tab__title">{title}</p>
    </div>
  );
};

export default connect(
  null,
  { setActiveTab }
)(Tab);
