import React from 'react';
import { connect } from 'react-redux';
import { TOGGLE_MENU_CLOSED, TOGGLE_MENU_OPEN } from '../redux/constants/actionTypes';
import toggleMenu from '../redux/actions/uiState/toggleMenu';

import { ReactComponent as MenuOpenButton } from '../icons/menu-open.svg';
import { ReactComponent as MenuCloseButton } from '../icons/menu-close.svg';

import Tab from './Tab';

import '../scss/bem/Sidebar.scss';

const Sidebar = ({ menuIsOpen, tabs, toggleMenu }) => {

  const handleMenuBtnClick = () => {
    menuIsOpen ?
      toggleMenu(TOGGLE_MENU_CLOSED) :
      toggleMenu(TOGGLE_MENU_OPEN);
  };

  return (
    <div className={menuIsOpen ? 'sidebar sidebar--open' : 'sidebar'}>
      {
        menuIsOpen ?
          <MenuCloseButton className="menu-close" onClick={handleMenuBtnClick} alt="Close Menu" /> :
          <MenuOpenButton className="menu-open" onClick={handleMenuBtnClick} alt="Open Menu" />
      }
      <div className="tabs-container">
        {
          tabs.map((tab, index) => (
            <Tab
              title={tab.name}
              isActive={tab.isActive}
              key={index}
            />
          ))
        }
      </div>
    </div>
  );
};

export default connect(
  null,
  { toggleMenu }
)(Sidebar);