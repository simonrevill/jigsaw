import React from 'react';

const MyProfile = ({ isActive }) => {
  return (
    <div className={isActive ? 'my-profile d-block' : 'my-profile d-none'}>

    </div>
  );
};

export default MyProfile;