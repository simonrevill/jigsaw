import React from 'react';

import { ReactComponent as ConnectLine } from '../../icons/connect-line.svg';
import { ReactComponent as Dot } from '../../icons/dot.svg';
import { ReactComponent as ConnectStep } from '../../icons/connect-step.svg';
import { ReactComponent as ConnectSeparator } from '../../icons/connect-separator.svg';

import Button from '../Button/Button';

import '../../scss/bem/UserCard.scss';

const UserCard = ({ currentUserInfo }) => {

  const { userName, firstName, lastName, age, aboutMe } = currentUserInfo;

  const handleButtonClick = () => console.log('Log out button clicked!');

  return (
    <div className="user-card">
      <div className="user-card__inner">
        <div className="user-card__avatar">
          <img src={require(`../../image-library/users/${userName}/${userName}.jpg`)} className="user-card__avatar-img" alt="Mary Smith" />
        </div>
        <div className="user-card__bio">
          <div className="user-card__bullets">
            <ConnectLine
              className="user-card__bullets-connect-line"
            />
            <Dot
              className="user-card__bullets-dot user-card__bullets-dot--1"
            />
            <ConnectStep
              className="user-card__connect-step user-card__connect-step--1"
            />
            <ConnectSeparator
              className="user-card__connect-separator user-card__connect-separator--1"
            />
            <Dot
              className="user-card__bullets-dot user-card__bullets-dot--2"
            />
            <ConnectStep
              className="user-card__connect-step user-card__connect-step--2"
            />
            <ConnectSeparator
              className="user-card__connect-separator user-card__connect-separator--2"
            />
            <Dot
              className="user-card__bullets-dot user-card__bullets-dot--3"
            />
            <ConnectStep
              className="user-card__connect-step user-card__connect-step--3"
            />
          </div>
          <div className="user-card__bio-container">
            <h2 className="user-card__bio-heading">
              Name:
            </h2>
            <p className="user-card__bio-text">
              {`${firstName} ${lastName}`}
            </p>
            <h2 className="user-card__bio-heading user-card__bio-heading--margin-top">
              Age:
            </h2>
            <p className="user-card__bio-text">
              {`${age}`}
            </p>
            <h2 className="user-card__bio-heading user-card__bio-heading--margin-top">
              About Me:
            </h2>
            <p className="user-card__bio-text user-card__bio-text--line-height">
              {`${aboutMe}`}
            </p>
          </div>
        </div>
        <div className="user-card__log-out">
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