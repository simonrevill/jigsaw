import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMenuIsOpen, getTabs } from '../../redux/selectors/uiState';
import { getCurrentUserInfo } from '../../redux/selectors/users';
import setCurrentUser from '../../redux/actions/users/setCurrentUser';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import '../../scss/bem/App.scss';
import AWS from 'aws-sdk';
import config from '../../aws/config';

AWS.config = config;

// S3 Storage:

// const s3 = new AWS.S3({
//   apiVersion: '2006-03-01',
//   params: { Bucket: 'jigsaw-image-library' }
// });

// s3.listObjectsV2(function (err, data) {
//   if (err) console.log('There was an error listing your objects: ' + err.message);
//   // const href = this.request.httpRequest.endpoint.href;
//   // const bucketUrl = `${href}${bucketName}/`;
//   // const imagesFolderUrl = `${bucketUrl}images/`;
//   console.log(data);
// });

// DynamoDB database:

const userId = 'f1b557c6-fb19-4ceb-99da-08acf0b69f45';
const tableName = 'registeredUsers';
const docClient = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: tableName,
  Key: { userId }
};

const getUserData = async () => {
  const getDataPromise = new Promise((resolve, reject) => {
    docClient.get(params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

  const data = await getDataPromise;
  return data.Item;
}

const App = ({ currentUserInfo, menuIsOpen, tabs, setCurrentUser }) => {
  useEffect(() => {
    getUserData()
      .then(data => setCurrentUser(data))
      .catch(err => console.log(err));
  }, [setCurrentUser]);


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
  { setCurrentUser }
)(App);