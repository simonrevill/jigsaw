import React from 'react';

import { connect } from 'react-redux';
import { getMenuIsOpen, getTabs } from '../redux/selectors/uiState';
import { getCurrentUserInfo } from '../redux/selectors/users';

import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Main from './Main';

import '../scss/bem/App.scss';

const App = ({ currentUserInfo, menuIsOpen, tabs }) => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="container">
        <Sidebar currentUserInfo={currentUserInfo} menuIsOpen={menuIsOpen} tabs={tabs} />
        <Main currentUserInfo={currentUserInfo} tabs={tabs} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const menuIsOpen = getMenuIsOpen(state);
  const tabs = getTabs(state);
  const currentUserInfo = getCurrentUserInfo(state);
  return { currentUserInfo, menuIsOpen, tabs };
};

export default connect(
  mapStateToProps,
  null
)(App);