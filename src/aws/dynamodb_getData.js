import AWS from 'aws-sdk';
import config from './config';
import { REGISTERED_USERS_TABLE, MAIN_IMAGE_LIBRARY_TABLE } from './dynamodb_constants';

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

  let data = await getUserDataPromise;
  // Transform user's main image library favourites into an array for use with Redux store:
  data.Item.favourites.imageLibrary = Object.keys(data.Item.favourites.imageLibrary).map(id => data.Item.favourites.imageLibrary[id]);
  return data.Item;
};

export const getImageLibrary = async () => {
  const params = {
    TableName: MAIN_IMAGE_LIBRARY_TABLE
  };

  const getImageLibraryPromise = new Promise((resolve, reject) => {
    docClient.scan(params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

  const data = await getImageLibraryPromise;
  return data.Items;
};