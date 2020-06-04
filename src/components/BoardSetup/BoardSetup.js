import React from 'react';
import Button from '../Button/Button';
import '../../scss/bem/BoardSetup.scss';

const BoardSetup = () => {

  const handleButtonClick = () => console.log('Play button clicked!');

  return (
    <div className="board-setup">
      <div className="board-setup__heading">
        <p className="board-setup__heading-text">Board Setup</p>
      </div>
      <div className="board-setup__file-info"></div>
      <div className="board-setup__grid-config"></div>
      <div className="board-setup__play">
        <Button
          buttonText="Play"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default BoardSetup;