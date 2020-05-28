import React from 'react';

import '../../scss/bem/ButtonSmall.scss';

const ButtonSmall = ({ buttonText, onClick, extraClasses }) => {
  return (
    <div className={extraClasses ? `button--small ${extraClasses}` : "button--small"} onClick={onClick}>
      <span className="button__text--small">{buttonText}</span>
    </div>
  );
};

export default ButtonSmall;