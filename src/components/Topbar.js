import React from 'react';

import Slider from './Slider';

const Topbar = () => {
  return (
    <div className="topbar">
      <Slider sliderLabel="Dark Mode:" showSliderState={true} />
    </div>
  );
};

export default Topbar;