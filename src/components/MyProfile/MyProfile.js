import React from 'react';

import UserCard from '../UserCard/UserCard';
import Favourites from '../Favourites/Favourites';

import '../../scss/bem/MyProfile.scss';

const MyProfile = ({ currentUserInfo, isActive }) => {

  return (
    <div className={isActive ? 'my-profile d-flex' : 'my-profile d-none'}>
      <UserCard
        currentUserInfo={currentUserInfo}
      />
      <Favourites
        currentUserInfo={currentUserInfo}
      />
    </div>
  );
};

export default MyProfile;