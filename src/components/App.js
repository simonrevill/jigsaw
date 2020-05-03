import React from 'react';

import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Main from './Main';

const App = () => {
  return (
    <div className="outer-container">
      <Topbar />
      <div className="inner-container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;