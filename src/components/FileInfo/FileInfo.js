import React from 'react';
import { ReactComponent as Star } from '../../icons/star.svg';
import { ReactComponent as StarSolid } from '../../icons/star-solid.svg';
import { ReactComponent as HeartSolid } from '../../icons/heart-solid.svg';
import '../../scss/bem/FileInfo.scss';

const FileInfo = () => {
  return (
    <div className="file-info">
      <div className="file-info__file-name">
        <p className="file-info__file-name-title">File name:</p>
        <p className="file-info__file-name-text">tower-restaurant.jpg</p>
      </div>
      <div className="file-info__rating">
        <p className="file-info__rating-title">Rating:</p>
        <div className="file-info__rating-stars">
          <StarSolid
            className="file-info__rating-star-solid"
          />
          <StarSolid
            className="file-info__rating-star-solid"
          />
          <StarSolid
            className="file-info__rating-star-solid"
          />
          <Star
            className="file-info__rating-star"
          />
          <Star
            className="file-info__rating-star"
          />
        </div>
      </div>
      <div className="file-info__favourite-indicator">
        <HeartSolid
          className="file-info__heart-solid"
        />
      </div>
    </div>
  );
};

export default FileInfo;