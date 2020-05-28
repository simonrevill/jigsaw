import React from 'react';

import { ReactComponent as HeartSolid } from '../../icons/heart-solid.svg';

import ImageGallery from '../ImageGallery/ImageGallery';

import '../../scss/bem/Favourites.scss';

const FavouriteImages = ({ currentUserInfo }) => {
  return (
    <div className="favourites">
      <div className="favourites__heading">
        <HeartSolid
          className="favourites__heart-solid"
        />
        <h2 className="favourites__heading-text">
          Favourite Images:
        </h2>
      </div>
      <ImageGallery
        currentUserInfo={currentUserInfo}
      />
    </div>
  );
};

export default FavouriteImages;