import React from 'react';
import Carousel from '../Carousel/Carousel';
import ImageBrowser from '../ImageBrowser/ImageBrowser';
import '../../scss/bem/Preview.scss';

const Preview = ({ currentUserInfo }) => {

  const [...favourites] = currentUserInfo.favourites.imageLibrary;
  const [...userFavourites] = currentUserInfo.favourites.userImageLibrary;

  return (
    <div className="preview">
      <div className="preview__heading">
        <p className="preview__heading-text">Preview</p>
      </div>
      <Carousel />
      <ImageBrowser
        currentUserInfo={currentUserInfo}
        favourites={favourites}
        userFavourites={userFavourites}
      />
    </div>
  );
};

export default Preview;