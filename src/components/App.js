import React from 'react';

import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Main from './Main';

import '../scss/bem/App.scss';

const App = () => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Main />
      </div>
    </React.Fragment>
  );
};

export default App;