import AWS from 'aws-sdk';
import config from './config';
import { REGISTERED_USERS_TABLE } from './dynamodb_constants';

AWS.config = config;
const docClient = new AWS.DynamoDB.DocumentClient();

export const getUserData = async userId => {
  const params = {
    TableName: REGISTERED_USERS_TABLE,
    Key: { userId }
  };

  const getUserDataPromise = new Promise((resolve, reject) => {
    docClient.get(params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

  const data = await getUserDataPromise;
  return data.Item;
};