import React from 'react';

import { ReactComponent as ConnectLine } from '../icons/connect-line.svg';
import { ReactComponent as Dot } from '../icons/dot.svg';
import { ReactComponent as ConnectStep } from '../icons/connect-step.svg';
import { ReactComponent as ConnectSeparator } from '../icons/connect-separator.svg';

import Button from './Button';

import '../scss/bem/UserCard.scss';

const UserCard = ({ currentUserInfo }) => {

  const { userName, firstName, lastName, age, aboutMe } = currentUserInfo;

  const handleButtonClick = () => console.log('Log out button clicked!');

  return (
    <div className="my-profile__card">
      <div className="my-profile__card-inner">
        <div className="my-profile__avatar">
          <img src={require(`../image-library/users/${userName}/${userName}.jpg`)} className="my-profile__avatar-img" alt="Mary Smith" />
        </div>
        <div className="my-profile__bio">
          <div className="my-profile__bullets">
            <ConnectLine
              className="my-profile__bullets-connect-line"
            />
            <Dot
              className="my-profile__bullets-dot my-profile__bullets-dot--1"
            />
            <ConnectStep
              className="my-profile__connect-step my-profile__connect-step--1"
            />
            <ConnectSeparator
              className="my-profile__connect-separator my-profile__connect-separator--1"
            />
            <Dot
              className="my-profile__bullets-dot my-profile__bullets-dot--2"
            />
            <ConnectStep
              className="my-profile__connect-step my-profile__connect-step--2"
            />
            <ConnectSeparator
              className="my-profile__connect-separator my-profile__connect-separator--2"
            />
            <Dot
              className="my-profile__bullets-dot my-profile__bullets-dot--3"
            />
            <ConnectStep
              className="my-profile__connect-step my-profile__connect-step--3"
            />
          </div>
          <div className="my-profile__bio-container">
            <h2 className="my-profile__bio-heading">
              Name:
            </h2>
            <p className="my-profile__bio-text">
              {`${firstName} ${lastName}`}
            </p>
            <h2 className="my-profile__bio-heading my-profile__bio-heading--margin-top">
              Age:
            </h2>
            <p className="my-profile__bio-text">
              {`${age}`}
            </p>
            <h2 className="my-profile__bio-heading my-profile__bio-heading--margin-top">
              About Me:
            </h2>
            <p className="my-profile__bio-text my-profile__bio-text--line-height">
              {`${aboutMe}`}
            </p>
          </div>
        </div>
        <div className="my-profile__log-out">
          <Button
            buttonText="Log out"
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;