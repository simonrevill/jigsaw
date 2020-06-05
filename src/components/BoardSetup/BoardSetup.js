import React from 'react';
import Button from '../Button/Button';
import { ReactComponent as Star } from '../../icons/star.svg';
import { ReactComponent as StarSolid } from '../../icons/star-solid.svg';
import { ReactComponent as HeartSolid } from '../../icons/heart-solid.svg';
import '../../scss/bem/BoardSetup.scss';

const BoardSetup = () => {

  const handleButtonClick = () => console.log('Play button clicked!');

  return (
    <div className="board-setup">
      <div className="board-setup__heading">
        <p className="board-setup__heading-text">Board Setup</p>
      </div>
      <div className="board-setup__config">
        <div className="board-setup__file-info">
          <div className="board-setup__file-name">
            <p className="board-setup__file-name-title">File name:</p>
            <p className="board-setup__file-name-text">tower-restaurant.jpg</p>
          </div>
          <div className="board-setup__rating">
            <p className="board-setup__rating-title">Rating:</p>
            <div className="board-setup__rating-stars">
              <StarSolid
                className="board-setup__rating-star-solid"
              />
              <StarSolid
                className="board-setup__rating-star-solid"
              />
              <StarSolid
                className="board-setup__rating-star-solid"
              />
              <Star
                className="board-setup__rating-star"
              />
              <Star
                className="board-setup__rating-star"
              />
            </div>
          </div>
          <div className="board-setup__favourite-indicator">
            <HeartSolid
              className="board-setup__heart-solid"
            />
          </div>
        </div>
        <div className="board-setup__grid-setup">
          <p className="board-setup__grid-title">Grid</p>
          <div className="board-setup__grid">

          </div>
        </div>
        <div className="board-setup__play">
          <Button
            buttonText="Play"
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardSetup;