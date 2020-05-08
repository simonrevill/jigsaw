import React from 'react';

import MyProfile from './MyProfile';
import Library from './Library';
import Upload from './Upload';
import Settings from './Settings';
import Board from './Board';

import '../scss/bem/Main.scss';

const Main = () => {
  return (
    <div className="main">
      <MyProfile />
      <Library />
      <Upload />
      <Settings />
      <Board />
    </div>
  );
};

export default Main;