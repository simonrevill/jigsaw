import React from 'react';
import Image from '../Image/Image';
import { Scrollbars } from 'react-custom-scrollbars';

import '../../scss/bem/ImageGallery.scss';

const ImageGallery = ({ currentUserInfo, favourites, userFavourites }) => {

  const trackVerticalStyles = {
    backgroundColor: '#555061',
    width: '17px',
    height: '790px',
    position: 'absolute',
    right: '0',
    borderRadius: '20px'
  };

  const thumbVerticalStyles = {
    backgroundColor: '#262034',
    position: 'absolute',
    left: '1px',
    width: '15px',
    borderRadius: '20px',
    paddingTop: '1px'
  };

  return (
    <div className="image-gallery">
      <div className="image-gallery__gallery-container">
        <Scrollbars
          style={{ width: 815, height: 790 }}
          renderTrackVertical={props => <div {...props} style={trackVerticalStyles} className="track-vertical" />}
          renderThumbVertical={props => <div {...props} style={thumbVerticalStyles} className="thumb-vertical" />}
        >
          <div className="image-gallery__gallery">
            {userFavourites.map(id => <Image key={id} imageSrc={id} />)}
            {favourites.map(id => <Image key={id} imageSrc={id} />)}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default ImageGallery;