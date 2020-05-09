import React from 'react';

import '../scss/bem/MyProfile.scss';

const MyProfile = ({ isActive }) => {
  return (
    <div className={isActive ? 'my-profile d-flex' : 'my-profile d-none'}>
      <div className="my-profile__card"></div>
      <div className="my-profile__favourites"></div>

    </div>
  );
};

export default MyProfile;