import React from 'react';

import { ReactComponent as HeartSolid } from '../icons/heart-solid.svg';

import UserCard from './UserCard';

import '../scss/bem/MyProfile.scss';

const MyProfile = ({ currentUserInfo, isActive }) => {

  return (
    <div className={isActive ? 'my-profile d-flex' : 'my-profile d-none'}>
      <UserCard
        currentUserInfo={currentUserInfo}
      />
      <div className="my-profile__favourites">
        <div className="my-profile__favourites-heading">
          <HeartSolid
            className="my-profile__heart-solid"
          />
          <h2 className="my-profile__favourites-heading-text">
            Favourite Images:
          </h2>
        </div>
      </div>

    </div>
  );
};

export default MyProfile;