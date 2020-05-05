import React from 'react';

import Slider from './Slider';

function Settings() {
  return (
    <div className="main__settings">
      <div className="main__inner">
        <h2 className="main__title">Difficulty</h2>
        <Slider sliderLabel="Show background image" showSliderState={false} />
        <Slider sliderLabel="Show grid overlay" showSliderState={false} />
        <Slider sliderLabel="Show correct placement" showSliderState={false} />
      </div>
    </div>
  );
};

export default Settings;