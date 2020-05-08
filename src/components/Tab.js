import React, { useState } from 'react';

import marySmithAvatar from '../image-library/users/marySmith/marySmith.jpg';

import { ReactComponent as LibraryIcon } from '../icons/library.svg';
import { ReactComponent as UploadIcon } from '../icons/upload.svg';
import { ReactComponent as SettingsIcon } from '../icons/settings.svg';
import { ReactComponent as BoardIcon } from '../icons/board.svg';

import '../scss/bem/Tab.scss';

const Tab = ({ title }) => {
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!isSelected);
  };

  const renderTabIcon = title => {
    switch (title) {
      case 'Library':
        return <LibraryIcon className="tab__icon" alt="Library" />;
      case 'Upload':
        return <UploadIcon className="tab__icon" alt="Upload" />;
      case 'Settings':
        return <SettingsIcon className="tab__icon" alt="Settings" />;
      case 'Board':
        return <BoardIcon className="tab__icon" alt="Board" />;
      default:
        return;
    }
  };

  return (
    <div className={isSelected ? 'tab tab--selected' : 'tab'} onClick={handleClick}>
      {
        title === "My Profile" ?
          <img src={marySmithAvatar} className="avatar" alt="Mary Smith" /> :
          null
      }
      {renderTabIcon(title)}
      <p className="tab__title">{title}</p>
    </div>
  );
};

export default Tab;
