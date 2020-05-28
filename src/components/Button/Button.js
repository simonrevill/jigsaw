import React from 'react';

import '../../scss/bem/Button.scss';

const Button = ({ buttonText, onClick, extraClasses }) => {
  return (
    <div className={extraClasses ? `button ${extraClasses}` : "button"} onClick={onClick}>
      <span className="button__text">{buttonText}</span>
    </div>
  );
};

export default Button;