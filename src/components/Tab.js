import React, { useState } from 'react';

const Tab = ({ title }) => {
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!isSelected);
  }

  return (
    <div className={isSelected ? 'tab tab--selected' : 'tab'} onClick={handleClick}>
      {title}
    </div>
  );
};

export default Tab;
