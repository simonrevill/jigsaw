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

// Update Dark Mode settings:
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

// Update Show Background Image settings:
const updateBackgroundImage = (userId, showBackgroundImage) => {
  const params = {
    TableName: REGISTERED_USERS_TABLE,
    Key: { userId },
    UpdateExpression: "set userPreferences.difficulty.showBackgroundImage = :d",
    ExpressionAttributeValues: {
      ":d": !showBackgroundImage
    },
    ReturnValues: "UPDATED_NEW"
  };
  // Send update to db:
  update(params);
};

// Update Show Grid Overlay settings:
const updateGridOverlay = (userId, showGridOverlay) => {
  const params = {
    TableName: REGISTERED_USERS_TABLE,
    Key: { userId },
    UpdateExpression: "set userPreferences.difficulty.showGridOverlay = :d",
    ExpressionAttributeValues: {
      ":d": !showGridOverlay
    },
    ReturnValues: "UPDATED_NEW"
  };
  // Send update to db:
  update(params);
};

// Update Show Correct Placement settings:
const updateCorrectPlacement = (userId, showCorrectPlacement) => {
  const params = {
    TableName: REGISTERED_USERS_TABLE,
    Key: { userId },
    UpdateExpression: "set userPreferences.difficulty.showCorrectPlacement = :d",
    ExpressionAttributeValues: {
      ":d": !showCorrectPlacement
    },
    ReturnValues: "UPDATED_NEW"
  };
  // Send update to db:
  update(params);
};

export const updateDatabase = (parameter, userId, value) => {
  switch (parameter) {
    case 'darkModeOn':
      updateDarkMode(userId, value);
      break;
    case 'showBackgroundImage':
      updateBackgroundImage(userId, value);
      break;
    case 'showGridOverlay':
      updateGridOverlay(userId, value);
      break;
    case 'showCorrectPlacement':
      updateCorrectPlacement(userId, value);
      break;
    default:
      break;
  };
};