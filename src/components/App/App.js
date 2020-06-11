import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMenuIsOpen, getTabs, getMainImageLibrary } from '../../redux/selectors/uiState';
import { getCurrentUserInfo, getTheUserImageLibrary } from '../../redux/selectors/users';
import setCurrentUser from '../../redux/actions/users/setCurrentUser';
import setImageLibrary from '../../redux/actions/uiState/setImageLibrary';
import setUserImageLibrary from '../../redux/actions/users/setUserImageLibrary';
import { getUserData } from '../../aws/dynamodb_getData';
import { getImageLibrary } from '../../aws/s3_listObjects';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import '../../scss/bem/App.scss';

const App = ({ currentUserInfo, menuIsOpen, tabs, setCurrentUser, setImageLibrary, setUserImageLibrary, imageLibrary, userImageLibrary }) => {
  // users:
  // blankJigsawUser - 'e5aa91dc-4017-44f4-a327-666565d2026c'
  // marySmith - 'f3a0f858-57b4-4420-81fa-1f0acdec979d'
  // johnSmith - 'f1b557c6-fb19-4ceb-99da-08acf0b69f45'

  // Current user is temporarily hard-coded until
  // login system is built and user is loaded into Redux store:
  const userId = 'f3a0f858-57b4-4420-81fa-1f0acdec979d';

  // Get and set user data on load:
  useEffect(() => {
    getUserData(userId)
      .then(data => setCurrentUser(data))
      .catch(err => console.log(err));
  }, [setCurrentUser]);

  // Get main image library:
  useEffect(() => {
    getImageLibrary()
      .then(data => setImageLibrary(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Topbar currentUserInfo={currentUserInfo} />
      <div className="container">
        <Sidebar currentUserInfo={currentUserInfo} menuIsOpen={menuIsOpen} tabs={tabs} />
        <Main currentUserInfo={currentUserInfo} tabs={tabs} imageLibrary={imageLibrary} userImageLibrary={userImageLibrary} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const menuIsOpen = getMenuIsOpen(state);
  const tabs = getTabs(state);
  const currentUserInfo = getCurrentUserInfo(state);
  const imageLibrary = getMainImageLibrary(state);
  const userImageLibrary = getTheUserImageLibrary(state);
  return { currentUserInfo, menuIsOpen, tabs, imageLibrary, userImageLibrary };
};

export default connect(
  mapStateToProps,
  { setCurrentUser, setImageLibrary, setUserImageLibrary }
)(App);