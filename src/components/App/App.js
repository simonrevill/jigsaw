import React from 'react';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { connect } from 'react-redux';
import { getMenuIsOpen, getTabs } from '../../redux/selectors/uiState';
import { getCurrentUserInfo } from '../../redux/selectors/users';

import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

import '../../scss/bem/App.scss';

var firebaseConfig = {
  apiKey: "AIzaSyBg39GMHs6FZcswSqzRW3rJuO2NJTspySs",
  authDomain: "jigsaw-b70b6.firebaseapp.com",
  databaseURL: "https://jigsaw-b70b6.firebaseio.com",
  projectId: "jigsaw-b70b6",
  storageBucket: "jigsaw-b70b6.appspot.com",
  messagingSenderId: "757501595285",
  appId: "1:757501595285:web:bb10e117ff35d121c3159c"
};

firebase.initializeApp(firebaseConfig);

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