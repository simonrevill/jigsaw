import React from 'react';

import { connect } from 'react-redux';
import { getUserPreferences } from '../../redux/selectors/users';
import toggleDarkMode from '../../redux/actions/users/toggleDarkMode';

import Slider from '../Slider/Slider';
import '../../scss/bem/Topbar.scss';

import AWS from 'aws-sdk';
import config from '../../aws/config';

AWS.config = config;
const docClient = new AWS.DynamoDB.DocumentClient();

const Topbar = ({ currentUserInfo, darkMode, toggleDarkMode }) => {

  const { userId } = currentUserInfo;

  const updateDb = (userId, darkMode) => {
    console.log(userId);
    console.log(darkMode);
    const params = {
      TableName: 'registeredUsers',
      Key: { userId },
      UpdateExpression: "set userPreferences.darkMode = :d",
      ExpressionAttributeValues: {
        ":d": !darkMode
      },
      ReturnValues: "UPDATED_NEW"
    };

    docClient.update(params, (err, data) => {
      err ?
        console.error("Unable to update item: " + "\n" + JSON.stringify(err, undefined, 2)) :
        console.log("UpdateItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2));
    });
  };

  const handleClick = () => {
    toggleDarkMode();
    updateDb(userId, darkMode);
  };

  return (
    <div className="topbar">
      <Slider
        sliderLabel="Dark Mode:"
        showSliderState={true}
        sliderState={darkMode}
        onClick={handleClick}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const userPreferences = getUserPreferences(state);
  const darkMode = userPreferences.darkMode;
  return { darkMode };
};

export default connect(
  mapStateToProps,
  { toggleDarkMode }
)(Topbar);