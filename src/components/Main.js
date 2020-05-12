import React from 'react';

import MyProfile from './MyProfile';
import Library from './Library';
import Upload from './Upload';
import Settings from './Settings';
import Board from './Board';

import '../scss/bem/Main.scss';

const Main = ({ currentUserInfo, tabs }) => {

  const tabStates = {
    MyProfile: tabs[0].isActive,
    Library: tabs[1].isActive,
    Upload: tabs[2].isActive,
    Settings: tabs[3].isActive,
    Board: tabs[4].isActive,
  };

  return (
    <div className="main">
      <MyProfile currentUserInfo={currentUserInfo} isActive={tabStates.MyProfile} />
      <Library isActive={tabStates.Library} />
      <Upload isActive={tabStates.Upload} />
      <Settings isActive={tabStates.Settings} />
      <Board isActive={tabStates.Board} />
    </div>
  );
};

export default Main;