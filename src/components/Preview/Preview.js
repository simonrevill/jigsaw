import React from 'react';
import Carousel from '../Carousel/Carousel';
import ImageBrowser from '../ImageBrowser/ImageBrowser';
import '../../scss/bem/Preview.scss';

const Preview = ({ currentUserInfo }) => {
  return (
    <div className="preview">
      <div className="preview__heading">
        <p className="preview__heading-text">Preview</p>
      </div>
      <Carousel />
      <ImageBrowser />
    </div>
  );
};

export default Preview;