import AWS from 'aws-sdk';

const config = new AWS.Config({
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID
  }),
  region: process.env.REACT_APP_AWS_REGION
});

export default config;