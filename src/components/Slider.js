import React, { useState } from 'react'

const Slider = ({ sliderLabel, showSliderState }) => {
  const [isOn, setOn] = useState(false);

  const handleClick = () => {
    setOn(!isOn);
  };

  return (
    <div className="slider__container">
      <div className="slider__label">{sliderLabel}</div>
      <div className={isOn ? "slider slider--active" : "slider"} onClick={handleClick}>
        <div className="slider__inner">
          <div className="slider__switch"></div>
        </div>
      </div>
      {
        showSliderState ?
          <div className={isOn ? "slider__state slider__state--active" : "slider__state"}>
            {isOn ? "On" : "Off"}
          </div> :
          null
      }

    </div>
  );
};

export default Slider;