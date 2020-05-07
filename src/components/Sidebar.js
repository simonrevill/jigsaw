import React, { useState } from 'react';

import { ReactComponent as MenuOpenButton } from '../icons/menu-open.svg';
import { ReactComponent as MenuCloseButton } from '../icons/menu-close.svg';

import Tab from './Tab';

import '../scss/bem/Sidebar.scss';

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMenuBtnClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={isOpen ? 'sidebar sidebar--open' : 'sidebar'}>
      {
        isOpen ?
          <MenuCloseButton className="menu-close" onClick={handleMenuBtnClick} alt="Close Menu" /> :
          <MenuOpenButton className="menu-open" onClick={handleMenuBtnClick} alt="Open Menu" />
      }
      <div className="tabs-container">
        <Tab
          title="My Profile"
        />
        <Tab
          title="Library"
          iconPath="../icons/"
        />
        <Tab
          title="Upload"
          iconPath="../icons/"
        />
        <Tab
          title="Settings"
          iconPath="../icons/"
        />
        <Tab
          title="Board"
          iconPath="../icons/"
        />
      </div>
    </div>
  );
};

export default Sidebar;