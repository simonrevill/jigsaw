import React from 'react';
import { ReactComponent as Star } from '../../icons/star.svg';
import { ReactComponent as StarSolid } from '../../icons/star-solid.svg';
import ButtonSmall from '../Button/ButtonSmall';

import '../../scss/bem/Image.scss';


const Image = ({ imageSrc, imageName, imageRating }) => {

  const backgroundImageStyles = {
    backgroundImage: `url("${imageSrc}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    transformOrigin: 'preserve-3d',
    transform: `translateZ(75px) perspective(200px)`
  };

  const renderRating = () => {

    let solidStars;
    let emptyStars;

    if (imageRating === 0) {
      solidStars = 0;
      emptyStars = 5;
    } else if (imageRating === 5) {
      solidStars = 5;
      emptyStars = 0;
    } else {
      solidStars = imageRating;
      emptyStars = 5 - solidStars;
    }
    return { solidStars, emptyStars };
  };

  const result = renderRating();


  const handleClick = () => console.log('Small button clicked!');


  return (
    <div className="image" style={backgroundImageStyles}>
      <div className="image__overlay">
        <ButtonSmall buttonText="Play" onClick={handleClick} extraClasses="button--favourites" />
        <p className="image__name">{imageName}</p>
        <div className="image__rating">
          {Array.apply(null, { length: result.solidStars }).map((star, index) => <StarSolid key={index} />)}
          {Array.apply(null, { length: result.emptyStars }).map((star, index) => <Star key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default Image;