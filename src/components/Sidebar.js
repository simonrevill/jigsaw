import React from 'react';
import { connect } from 'react-redux';
import toggleMenu from '../redux/actions/uiState/toggleMenu';

import { ReactComponent as MenuOpenButton } from '../icons/menu-open.svg';
import { ReactComponent as MenuCloseButton } from '../icons/menu-close.svg';

import Tab from './Tab';

import '../scss/bem/Sidebar.scss';

const Sidebar = ({ currentUserInfo, menuIsOpen, tabs, toggleMenu }) => {

  const handleMenuBtnClick = () => toggleMenu();

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
              currentUserInfo={currentUserInfo}
              title={tab.name}
              isActive={tab.isActive}
              menuIsOpen={menuIsOpen}
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