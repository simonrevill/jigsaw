import React from 'react';
import Preview from '../Preview/Preview';
import BoardSetup from '../BoardSetup/BoardSetup';
import '../../scss/bem/Library.scss';

const Library = ({ currentUserInfo, isActive, imageLibrary, userImageLibrary }) => {

  return (
    <div className={isActive ? 'library d-flex' : 'library d-none'}>
      <Preview
        currentUserInfo={currentUserInfo}
        imageLibrary={imageLibrary}
        userImageLibrary={userImageLibrary}
      />
      <BoardSetup
        currentUserInfo={currentUserInfo}
      />
    </div>
  );
};

export default Library;