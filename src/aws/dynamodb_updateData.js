import AWS from 'aws-sdk';
import config from './config';
import { REGISTERED_USERS_TABLE } from './dynamodb_constants';
import { v4 as uuidv4 } from 'uuid';

AWS.config = config;
const docClient = new AWS.DynamoDB.DocumentClient();

// Update Database - Error Message:
const logDbUpdateError = err => console.error("Unable to update item: ", JSON.stringify(err, undefined, 2));
// Update Database - Success Message:
const logDbUpdateSuccess = data => console.log("UpdateItem succeeded: ", JSON.stringify(data, undefined, 2));

// Update Database - Main Update Function:
const update = params => docClient.update(params, (err, data) => err ? logDbUpdateError(err) : logDbUpdateSuccess(data));

// Update Dark Mode settings:
const updateDarkMode = (userId, darkModeOn) => {
  const params = {
    TableName: REGISTERED_USERS_TABLE,
    Key: { userId },
    UpdateExpression: "set userPreferences.darkMode = :d",
    ExpressionAttributeValues: {
      ":d": !darkModeOn
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

// Update User Image Library:
const updateUserImageLibrary = (userId, data) => {
  const params = {
    TableName: REGISTERED_USERS_TABLE,
    Key: { userId },
    UpdateExpression: "set userImageLibrary.#id = :d",
    ExpressionAttributeNames: {
      '#id': data[0].id
    },
    ExpressionAttributeValues: {
      ":d": data[0]
    },
    ReturnValues: "UPDATED_NEW"
  };
  // Send update to db:
  update(params);
};

// Delete Favourite from Image Library:
const deleteImageLibraryFavourite = async (userId, data) => {
  const params = {
    TableName: REGISTERED_USERS_TABLE,
    Key: { userId },
    UpdateExpression: "set favourites.imageLibrary = :d",
    ExpressionAttributeValues: {
      ":d": data
    },
    ReturnValues: "UPDATED_NEW"
  };

  const deleteImageLibraryFavouritePromise = new Promise((resolve, reject) => {
    docClient.update(params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

  const newData = await deleteImageLibraryFavouritePromise;
  return newData;
};

// Add Favourite to Image Library:
const addImageLibraryFavourite = async (userId, data) => {
  const params = {
    TableName: REGISTERED_USERS_TABLE,
    Key: { userId },
    UpdateExpression: "set favourites.imageLibrary = :d",
    ExpressionAttributeValues: {
      ":d": data
    },
    ReturnValues: "UPDATED_NEW"
  };

  const addImageLibraryFavouritePromise = new Promise((resolve, reject) => {
    docClient.update(params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

  const newData = await addImageLibraryFavouritePromise;
  return newData;
};

// Delete Favourite from User Image Library:
const deleteUserImageLibraryFavourite = async (userId, data) => {
  const params = {
    TableName: REGISTERED_USERS_TABLE,
    Key: { userId },
    UpdateExpression: "set favourites.userImageLibrary = :d",
    ExpressionAttributeValues: {
      ":d": data
    },
    ReturnValues: "UPDATED_NEW"
  };

  const deleteUserImageLibraryFavouritePromise = new Promise((resolve, reject) => {
    docClient.update(params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

  const newData = await deleteUserImageLibraryFavouritePromise;
  return newData;
};

// Add Favourite to User Image Library:
const addUserImageLibraryFavourite = async (userId, data) => {
  const params = {
    TableName: REGISTERED_USERS_TABLE,
    Key: { userId },
    UpdateExpression: "set favourites.userImageLibrary = :d",
    ExpressionAttributeValues: {
      ":d": data
    },
    ReturnValues: "UPDATED_NEW"
  };

  const addUserImageLibraryFavouritePromise = new Promise((resolve, reject) => {
    docClient.update(params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });

  const newData = await addUserImageLibraryFavouritePromise;
  return newData;
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
    case 'userImageLibrary':
      updateUserImageLibrary(userId, value);
      break;
    case 'deleteImageLibraryFavourite':
      // Returns a promise:
      return deleteImageLibraryFavourite(userId, value);
    case 'addImageLibraryFavourite':
      // Returns a promise:
      return addImageLibraryFavourite(userId, value);
    case 'deleteUserImageLibraryFavourite':
      // Returns a promise:
      return deleteUserImageLibraryFavourite(userId, value);
    case 'addUserImageLibraryFavourite':
      // Returns a promise:
      return addUserImageLibraryFavourite(userId, value);
    default:
      break;
  };
};