import React from 'react';

import '../../scss/bem/Slider.scss';

const Slider = ({ sliderLabel, showSliderState, sliderState, onClick }) => {

  return (
    <div className="slider__container">
      <div className="slider__label">{sliderLabel}</div>
      <div className={sliderState ? "slider slider--active" : "slider"} onClick={onClick}>
        <div className="slider__inner">
          <div className="slider__switch"></div>
        </div>
      </div>
      {
        showSliderState ?
          <div className={sliderState ? "slider__state slider__state--active" : "slider__state"}>
            {sliderState ? "On" : "Off"}
          </div> :
          null
      }
    </div>
  );
};

export default Slider;