import React from 'react';

import MyProfile from './MyProfile';
import Library from './Library';
import Upload from './Upload';
import Settings from './Settings';
import Board from './Board';

import '../scss/bem/Main.scss';

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