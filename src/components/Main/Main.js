import React from 'react';

import MyProfile from '../MyProfile/MyProfile';
import Library from '../Library/Library';
import Upload from '../Upload/Upload';
import Settings from '../Settings/Settings';
import Board from '../Board/Board';

import '../../scss/bem/Main.scss';

const Main = ({ currentUserInfo, tabs }) => {
  return (
    <div className="main">
      <MyProfile currentUserInfo={currentUserInfo} isActive={tabs[0].isActive} />
      <Library isActive={tabs[1].isActive} />
      <Upload isActive={tabs[2].isActive} />
      <Settings isActive={tabs[3].isActive} />
      <Board isActive={tabs[4].isActive} />
    </div>
  );
};

export default Main;