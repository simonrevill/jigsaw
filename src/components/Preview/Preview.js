import React from 'react';
import Carousel from '../Carousel/Carousel';
import ImageBrowser from '../ImageBrowser/ImageBrowser';
import '../../scss/bem/Preview.scss';

const Preview = ({ currentUserInfo, imageLibrary, userImageLibrary, gridSetting, currentSelectedImage }) => {

  // Todo: grab the userImageLibrary!

  return (
    <div className="preview">
      <div className="preview__heading">
        <p className="preview__heading-text">Preview</p>
      </div>
      <Carousel
        gridSetting={gridSetting}
        imageLibrary={imageLibrary}
        userImageLibrary={userImageLibrary}
        currentSelectedImage={currentSelectedImage}
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