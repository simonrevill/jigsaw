import React from 'react';
import FileInfo from '../FileInfo/FileInfo';
import GridSetup from '../GridSetup/GridSetup';
import Button from '../Button/Button';
import '../../scss/bem/BoardSetup.scss';

const BoardSetup = ({ currentUserInfo }) => {

  const handlePlayButtonClick = () => console.log('Play button clicked!');

  return (
    <div className="board-setup">
      <div className="board-setup__heading">
        <p className="board-setup__heading-text">Board Setup</p>
      </div>
      <div className="board-setup__config">
        <FileInfo />
        <GridSetup />
        <div className="board-setup__play">
          <Button
            buttonText="Play"
            onClick={handlePlayButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardSetup;