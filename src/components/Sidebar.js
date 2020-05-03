import React, { useState } from 'react'

import { ReactComponent as MenuOpenButton } from '../icons/menu-open.svg';
import { ReactComponent as MenuCloseButton } from '../icons/menu-close.svg';

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
      <MenuOpenButton className="menu-open" onClick={handleMenuBtnClick} alt="Open Menu" />
    </div>
  );
};

export default Sidebar;