import React, { useState } from 'react';
import Image from '../Image/Image';
import Scroller from '../Scroller/Scroller';

import '../../scss/bem/ImageGallery.scss';

const ImageGallery = ({ currentUserInfo, favourites, userFavourites,
  totalFavouriteImages }) => {

  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = e => setScrollTop(e.currentTarget.scrollTop);

  return (
    <div className="image-gallery">
      <div className="image-gallery__gallery-container">
        <div className="image-gallery__gallery" onScroll={handleScroll}>
          {userFavourites.map(id => <Image key={id} imageSrc={id} />)}
          {favourites.map(id => <Image key={id} imageSrc={id} />)}
        </div>
        {
          totalFavouriteImages < 16 ?
            null :
            <Scroller scrollTop={scrollTop} />
        }
      </div>
    </div>
  );
};

export default ImageGallery;