import AWS from 'aws-sdk';
import config from './config';
import { REGISTERED_USERS_TABLE } from './dynamodb_constants';

AWS.config = config;
const docClient = new AWS.DynamoDB.DocumentClient();

// Update Database - Error Message:
const logDbUpdateError = err => console.error("Unable to update item: ", JSON.stringify(err, undefined, 2));
// Update Database - Success Message:
const logDbUpdateSuccess = data => console.log("UpdateItem succeeded: ", JSON.stringify(data, undefined, 2));

// Update Database - Main Update Function:
const update = params => docClient.update(params, (err, data) => err ? logDbUpdateError(err) : logDbUpdateSuccess(data));

// Update Dark Mode settings with new params object:
const updateDarkMode = (userId, darkMode) => {
  const params = {
    TableName: REGISTERED_USERS_TABLE,
    Key: { userId },
    UpdateExpression: "set userPreferences.darkMode = :d",
    ExpressionAttributeValues: {
      ":d": !darkMode
    },
    ReturnValues: "UPDATED_NEW"
  };
  // Send update to db:
  update(params);
};

export const updateDatabase = (parameter, userId, value) => {
  switch (parameter) {
    case 'darkMode':
      updateDarkMode(userId, value);
      break;
    default:
      break;
  };
};