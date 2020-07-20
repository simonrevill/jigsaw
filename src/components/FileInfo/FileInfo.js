import React from 'react';
import { ReactComponent as Star } from '../../icons/star.svg';
import { ReactComponent as StarSolid } from '../../icons/star-solid.svg';
import { ReactComponent as Heart } from '../../icons/heart.svg';
import { ReactComponent as HeartSolid } from '../../icons/heart-solid.svg';
import '../../scss/bem/FileInfo.scss';

const FileInfo = ({ currentSelectedImage }) => {

  const { name, rating } = currentSelectedImage;

  return (
    <div className="file-info">
      <div className="file-info__file-name">
        <p className="file-info__file-name-title">File name:</p>
        <p className="file-info__file-name-text">{name}</p>
      </div>
      <div className="file-info__rating">
        <p className="file-info__rating-title">Rating:</p>
        <div className="file-info__rating-stars">
          <StarSolid
            className="file-info__rating-star file-info__rating-star--solid"
          />
          <StarSolid
            className="file-info__rating-star file-info__rating-star--solid"
          />
          <StarSolid
            className="file-info__rating-star file-info__rating-star--solid"
          />
          <Star
            className="file-info__rating-star file-info__rating-star--empty"
          />
          <Star
            className="file-info__rating-star file-info__rating-star--empty"
          />
        </div>
      </div>
      <div className="file-info__favourite-indicator">
        {
          currentSelectedImage.isUserFavourite ?
            <HeartSolid
              className="file-info__heart-solid"
            /> :
            <Heart
              className="file-info__heart"
            />
        }
      </div>
    </div>
  );
};

export default FileInfo;