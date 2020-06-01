import React from 'react';

import { ReactComponent as HeartSolid } from '../../icons/heart-solid.svg';

import ImageGallery from '../ImageGallery/ImageGallery';

import '../../scss/bem/Favourites.scss';

const FavouriteImages = ({ currentUserInfo }) => {

  const [...favourites] = currentUserInfo.favourites.imageLibrary;
  const [...userFavourites] = currentUserInfo.favourites.userImageLibrary;

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
        favourites={favourites}
        userFavourites={userFavourites}
      />
    </div>
  );
};

export default FavouriteImages;