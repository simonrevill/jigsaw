import React from 'react';
import { ReactComponent as Heart } from '../../icons/heart.svg';
import { ReactComponent as HeartSolid } from '../../icons/heart-solid.svg';
import '../../scss/bem/BrowserImage.scss';

const BrowserImage = ({ imageSrc, imageName, isFavourite }) => {

  const backgroundImageStyles = {
    backgroundImage: `url("${imageSrc}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    transformOrigin: 'preserve-3d',
    transform: `translateZ(75px) perspective(200px)`
  };

  return (
    <div className="browser-image" style={backgroundImageStyles}>
      {
        isFavourite ?
          <HeartSolid className="browser-image__is-user-favourite" /> :
          <Heart className="browser-image__is-user-favourite" />
      }
      <div className="browser-image__overlay">
        <p className="browser-image__name">{imageName}</p>
      </div>
    </div>
  );
};

export default BrowserImage;