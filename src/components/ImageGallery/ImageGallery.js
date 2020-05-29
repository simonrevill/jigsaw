import React from 'react';
import Image from '../Image/Image';
import Scroller from '../Scroller/Scroller';

import '../../scss/bem/ImageGallery.scss';

const ImageGallery = ({ currentUserInfo, favourites, userFavourites,
  totalFavouriteImages, galleryRows }) => {

  return (
    <div className="image-gallery">
      <div className="image-gallery__gallery-container">
        <div className="image-gallery__gallery">
          {userFavourites.map(id => <Image key={id} imageSrc={id} />)}
          {favourites.map(id => <Image key={id} imageSrc={id} />)}
        </div>
        {
          totalFavouriteImages <= 16 ?
            null :
            <Scroller
              galleryRows={galleryRows}
            />
        }
      </div>
    </div>
  );
};

export default ImageGallery;