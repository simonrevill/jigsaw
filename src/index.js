import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AWS from 'aws-sdk';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import './scss/index.scss';

const myAWSCredentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID
});

const myAWSConfig = new AWS.Config({
  credentials: myAWSCredentials, region: process.env.REACT_APP_AWS_REGION
});

AWS.config = myAWSConfig;

const s3 = new AWS.S3({
  apiVersion: '2006-03-01'
});

s3.config.update({ credentials: AWS.config.credentials });

s3.listBuckets((err, data) => {
  err ?
    console.log('Error: ', err) :
    console.log('Success: ', data.Buckets);
});

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
