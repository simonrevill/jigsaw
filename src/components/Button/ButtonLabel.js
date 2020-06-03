import React from 'react';

import '../../scss/bem/ButtonLabel.scss';

const ButtonLabel = ({ buttonText, htmlFor, extraClasses }) => {
  return (
    <label className={extraClasses ? `button--label ${extraClasses}` : "button--label"} htmlFor={htmlFor}>
      <span className="button__text--label">{buttonText}</span>
    </label>
  );
};

export default ButtonLabel;