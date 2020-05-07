import React from 'react';

import Upload from './Upload';
import Settings from './Settings';

import '../scss/bem/Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Upload />
      {/* <Settings /> */}
    </div>
  );
};

export default Main;