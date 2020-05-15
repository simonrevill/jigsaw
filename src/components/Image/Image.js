import React from 'react';

import '../../scss/bem/Image.scss';

const Image = ({ imgSrc }) => {
  return (
    <div className="image">
      {imgSrc}
    </div>
  );
};

export default Image;