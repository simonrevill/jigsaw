import React, { useState } from 'react'

const Slider = () => {
  const [isOn, setOn] = useState(false);

  const handleClick = () => {
    setOn(!isOn);
  };

  return (
    <React.Fragment>
      <div className="slider__label">Dark Mode:</div>
      <div className={isOn ? "slider slider--active" : "slider"} onClick={handleClick}>
        <div className="slider__inner">
          <div className="slider__switch"></div>
        </div>
      </div>
      <div className={isOn ? "slider__state slider__state--active" : "slider__state"}>
        {isOn ? "On" : "Off"}
      </div>
    </React.Fragment>
  );
};

export default Slider;