import React from 'react';

import marySmithAvatar from '../image-library/users/marySmith/marySmith.jpg';
import { ReactComponent as ConnectLine } from '../icons/connect-line.svg';
import { ReactComponent as Dot } from '../icons/dot.svg';
import { ReactComponent as ConnectStep } from '../icons/connect-step.svg';
import { ReactComponent as ConnectSeparator } from '../icons/connect-separator.svg';

import Button from './Button';

import '../scss/bem/MyProfile.scss';

const MyProfile = ({ isActive }) => {

  const handleButtonClick = () => console.log('Log out button clicked!');

  return (
    <div className={isActive ? 'my-profile d-flex' : 'my-profile d-none'}>
      <div className="my-profile__card">
        <div className="my-profile__card-inner">
          <div className="my-profile__avatar">
            <img src={marySmithAvatar} className="my-profile__avatar-img" alt="Mary Smith" />
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
                Mary Smith
              </p>
              <h2 className="my-profile__bio-heading my-profile__bio-heading--margin-top">
                Age:
              </h2>
              <p className="my-profile__bio-text">
                27
              </p>
              <h2 className="my-profile__bio-heading my-profile__bio-heading--margin-top">
                About Me:
              </h2>
              <p className="my-profile__bio-text my-profile__bio-text--line-height">
                My name is Mary, and I just love jigsaw puzzles! My favourite jigsaw
                category is Architecture, but I also like ones with plants in them.
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
      <div className="my-profile__favourites"></div>

    </div>
  );
};

export default MyProfile;