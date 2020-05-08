import React from 'react';

import { connect } from 'react-redux';
import { getMenuIsOpen, getTabs } from '../redux/selectors/uiState';

import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Main from './Main';

import '../scss/bem/App.scss';

const App = ({ menuIsOpen, tabs }) => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="container">
        <Sidebar menuIsOpen={menuIsOpen} tabs={tabs} />
        <Main />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const menuIsOpen = getMenuIsOpen(state);
  const tabs = getTabs(state);
  return { menuIsOpen, tabs };
};

export default connect(
  mapStateToProps,
  null
)(App);