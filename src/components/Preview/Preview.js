import React from 'react';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import ImageBrowser from '../ImageBrowser/ImageBrowser';
import '../../scss/bem/Preview.scss';

const Preview = ({ currentUserInfo, activeImageBrowserTabName, imageLibrary, userImageLibrary, gridSetting, currentSelectedImage, handlePreviousClick, handleNextClick }) => {

  return (
    <div className="preview">
      <div className="preview__heading">
        <p className="preview__heading-text">Preview</p>
      </div>
      <CarouselContainer
        activeImageBrowserTabName={activeImageBrowserTabName}
        gridSetting={gridSetting}
        imageLibrary={imageLibrary}
        userImageLibrary={userImageLibrary}
        currentSelectedImage={currentSelectedImage}
        handlePreviousClick={handlePreviousClick}
        handleNextClick={handleNextClick}
      />
      <ImageBrowser
        currentUserInfo={currentUserInfo}
        imageLibrary={imageLibrary}
        userImageLibrary={userImageLibrary}
        currentSelectedImage={currentSelectedImage}
      />
    </div>
  );
};

export default Preview;