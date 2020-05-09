import React from 'react';

const Board = ({ isActive }) => {
  return (
    <div className={isActive ? 'board d-block' : 'board d-none'}>

    </div>
  );
};

export default Board;