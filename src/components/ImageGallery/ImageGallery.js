import React from 'react';
import Image from '../Image/Image';
import { Scrollbars } from 'react-custom-scrollbars';
import { trackVerticalStyles, thumbVerticalStyles, innerThumbStyles } from './scrollbarStyles';
import { ReactComponent as Heart } from '../../icons/heart.svg';
import '../../scss/bem/ImageGallery.scss';

const ImageGallery = ({ currentUserInfo, favourites, userFavourites }) => {

  const totalFavouriteImages = favourites.length + userFavourites.length;

  const renderFavourites = favourites => favourites.map(image => <Image key={image.id} imageName={image.name} imageSrc={image.url} />);

  const renderUserFavourites = userFavourites => userFavourites.map(image => <Image key={image.id} imageName={image.name} imageSrc={image.url} />);

  const renderGallery = totalImages => {
    if (totalImages === 0) {
      return (
        <div className="image-gallery__gallery--no-favourites">
          <p className="image-gallery__no-favourites-message">
            You have no favourite images yet.
            <br />
            <br />
            To add images to your favourites list, go to the Image Library and click on the
            <span className="image-gallery__no-favourites-heart-icon">
              <Heart />
            </span>
            icon inside an image.
          </p>
        </div>
      );
    } else if (totalImages < 17) {
      return (
        <div className="image-gallery__gallery">
          {renderUserFavourites(userFavourites)}
          {renderFavourites(favourites)}
        </div>
      );
    } else {
      return (
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
          <div className="image-gallery__gallery">
            {renderUserFavourites(userFavourites)}
            {renderFavourites(favourites)}
          </div>
        </Scrollbars>
      );
    }
  };

  return (
    <div className="image-gallery">
      <div className="image-gallery__gallery-container">
        {renderGallery(totalFavouriteImages)}
      </div>
    </div>
  );
};

export default ImageGallery;