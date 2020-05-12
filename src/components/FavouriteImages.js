import React from 'react';

import { ReactComponent as HeartSolid } from '../icons/heart-solid.svg';

import '../scss/bem/FavouriteImages.scss';

const FavouriteImages = () => {
  return (
    <div className="my-profile__favourites">
      <div className="my-profile__favourites-heading">
        <HeartSolid
          className="my-profile__heart-solid"
        />
        <h2 className="my-profile__favourites-heading-text">
          Favourite Images:
        </h2>
      </div>
    </div>
  );
};

export default FavouriteImages;