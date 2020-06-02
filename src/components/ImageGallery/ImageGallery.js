import React from 'react';
import Image from '../Image/Image';
import { Scrollbars } from 'react-custom-scrollbars';

import '../../scss/bem/ImageGallery.scss';

const ImageGallery = ({ currentUserInfo, favourites, userFavourites }) => {

  const totalFavouriteImages = favourites.length + userFavourites.length;

  const trackVerticalStyles = {
    backgroundColor: '#555061',
    width: '17px',
    height: '790px',
    position: 'absolute',
    right: '0',
    borderRadius: '20px'
  };

  const thumbVerticalStyles = {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: '1px',
    width: '15px',
    borderRadius: '20px',
    paddingTop: '1px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const innerThumbStyles = {
    backgroundColor: '#262034',
    borderRadius: '20px',
    width: '15px',
    height: 'calc(100% - 3px)',
    position: 'absolute',
    top: '1px'
  };

  const renderImageGallery = (userFavourites, favourites) => (
    <div className="image-gallery__gallery">
      {userFavourites.map(id => <Image key={id} imageSrc={id} />)}
      {favourites.map(id => <Image key={id} imageSrc={id} />)}
    </div>
  );

  return (
    <div className="image-gallery">
      <div className="image-gallery__gallery-container">
        {
          totalFavouriteImages >= 17 ?
            <Scrollbars
              style={{ width: 815, height: 790 }}
              renderTrackVertical={props =>
                <div
                  {...props}
                  style={trackVerticalStyles}
                  className="track-vertical"
                />
              }
              renderThumbVertical={props =>
                <div
                  {...props}
                  style={thumbVerticalStyles}
                  className="thumb-vertical"
                >
                  <div
                    style={innerThumbStyles}
                    className="inner-thumb"
                  >
                  </div>
                </div>
              }
            >
              {renderImageGallery(userFavourites, favourites)}
            </Scrollbars>
            :
            renderImageGallery(userFavourites, favourites)
        }
      </div>
    </div>
  );
};

export default ImageGallery;