import React from 'react';
import Carousel from '../Carousel/Carousel';
import ImageBrowser from '../ImageBrowser/ImageBrowser';
import '../../scss/bem/Preview.scss';

const Preview = ({ currentUserInfo, imageLibrary, userImageLibrary }) => {

  // Todo: grab the userImageLibrary!

  return (
    <div className="preview">
      <div className="preview__heading">
        <p className="preview__heading-text">Preview</p>
      </div>
      <Carousel />
      <ImageBrowser
        currentUserInfo={currentUserInfo}
        imageLibrary={imageLibrary}
        userImageLibrary={userImageLibrary}
      />
    </div>
  );
};

export default Preview;