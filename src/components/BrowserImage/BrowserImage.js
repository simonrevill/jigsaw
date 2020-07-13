import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Heart } from '../../icons/heart.svg';
import { ReactComponent as HeartSolid } from '../../icons/heart-solid.svg';
import setCurrentSelectedImage from '../../redux/actions/uiState/setCurrentSelectedImage';
import '../../scss/bem/BrowserImage.scss';

const BrowserImage = ({ imageId, imageSrc, imageName, isUserFavourite,
  handleToggleLibraryFavourite, handleToggleUserLibraryFavourite, currentSelectedImage, activeTab, setCurrentSelectedImage }) => {

  const backgroundImageStyles = {
    backgroundImage: `url("${imageSrc}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    transformOrigin: 'preserve-3d',
    transform: `translateZ(75px) perspective(200px)`
  };

  const renderImageClasses = (imageId, isUserFavourite, currentSelectedImage, activeTab) => {

    if (isUserFavourite && (imageId === currentSelectedImage.id && currentSelectedImage.library === activeTab)) {
      return 'browser-image js-favourite-true browser-image--selected';
    }

    if (isUserFavourite && (imageId !== currentSelectedImage.id && currentSelectedImage.library === activeTab)) {
      return 'browser-image js-favourite-true';
    }

    if (isUserFavourite && (imageId !== currentSelectedImage.id && currentSelectedImage.library !== activeTab)) {
      return 'browser-image js-favourite-true';
    }

    if (!isUserFavourite && (imageId === currentSelectedImage.id && currentSelectedImage.library === activeTab)) {
      return 'browser-image js-favourite-false browser-image--selected';
    }

    if (!isUserFavourite && (imageId !== currentSelectedImage.id && currentSelectedImage.library === activeTab)) {
      return 'browser-image js-favourite-false';
    }

    if (!isUserFavourite && (imageId !== currentSelectedImage.id && currentSelectedImage.library !== activeTab)) {
      return 'browser-image js-favourite-false';
    }
  };

  const handleSelectImage = () => {
    setCurrentSelectedImage({
      id: imageId,
      name: imageName,
      url: imageSrc,
      library: activeTab
    });
  };

  // handle favourite click function....... not dry atm.

  const handleFavouriteClick = e => {
    e.stopPropagation();

    if (handleToggleLibraryFavourite) {
      handleToggleLibraryFavourite(e);
      return;
    }

    if (handleToggleUserLibraryFavourite) {
      handleToggleUserLibraryFavourite(e)
    };
  };

  return (
    <div
      className={renderImageClasses(imageId, isUserFavourite, currentSelectedImage, activeTab)}
      style={backgroundImageStyles}
      data-id={imageId}
      onClick={handleSelectImage}
    >
      {
        isUserFavourite ?
          <HeartSolid
            className="browser-image__is-user-favourite"
            onClick={handleFavouriteClick}
          /> :
          <Heart
            className="browser-image__is-user-favourite"
            onClick={handleFavouriteClick}
          />
      }
      <div className="browser-image__overlay">
        <p className="browser-image__name">{imageName}</p>
      </div>
    </div>
  );
};

export default connect(
  null,
  { setCurrentSelectedImage }
)(BrowserImage);