import React from 'react';

import UserCard from '../UserCard/UserCard';
import FavouriteImages from '../FavouriteImages/FavouriteImages';

import '../../scss/bem/MyProfile.scss';

const MyProfile = ({ currentUserInfo, isActive }) => {

  return (
    <div className={isActive ? 'my-profile d-flex' : 'my-profile d-none'}>
      <UserCard
        currentUserInfo={currentUserInfo}
      />
      <FavouriteImages />
    </div>
  );
};

export default MyProfile;