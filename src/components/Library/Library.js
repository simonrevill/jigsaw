import React from 'react';
import '../../scss/bem/Library.scss';

import Preview from '../Preview/Preview';
import BoardSetup from '../BoardSetup/BoardSetup';

const Library = ({ currentUserInfo, isActive }) => {
  return (
    <div className={isActive ? 'library d-flex' : 'library d-none'}>
      <Preview
        currentUserInfo={currentUserInfo}
      />
      <BoardSetup
        currentUserInfo={currentUserInfo}
      />
    </div>
  );
};

export default Library;