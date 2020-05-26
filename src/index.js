import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AWS from 'aws-sdk';
import config from './aws/config';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import './scss/index.scss';

AWS.config = config;

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

var db = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
