import React from 'react';

const Library = ({ isActive }) => {
  return (
    <div className={isActive ? 'library d-block' : 'library d-none'}>

    </div>
  );
};

export default Library;