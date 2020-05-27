import React from 'react';
import { connect } from 'react-redux';
import { getMenuIsOpen, getTabs } from '../../redux/selectors/uiState';
import { getCurrentUserInfo } from '../../redux/selectors/users';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import '../../scss/bem/App.scss';
import AWS from 'aws-sdk';
import config from '../../aws/config';

AWS.config = config;

// S3 Storage:

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: 'jigsaw-image-library' }
});

s3.listObjectsV2(function (err, data) {
  if (err) console.log('There was an error listing your objects: ' + err.message);
  // const href = this.request.httpRequest.endpoint.href;
  // const bucketUrl = `${href}${bucketName}/`;
  // const imagesFolderUrl = `${bucketUrl}images/`;
  console.log(data);
});

// DynamoDB database:

const userId = 'f3a0f858-57b4-4420-81fa-1f0acdec979d';
const tableName = 'registeredUsers';
const docClient = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: tableName,
  Key: { userId }
};

docClient.get(params, (err, data) => {
  err ?
    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2)) :
    console.log(JSON.stringify(data, null, 2));
});

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