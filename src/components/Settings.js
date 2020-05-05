import React from 'react';

import Slider from './Slider';

function Settings() {
  return (
    <div className="main__settings">
      <Slider sliderLabel="Show background image" showSliderState={false} />
      <Slider sliderLabel="Show grid overlay" showSliderState={false} />
      <Slider sliderLabel="Show correct placement" showSliderState={false} />
    </div>
  );
};

export default Settings;