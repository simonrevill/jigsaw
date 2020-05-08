import {
  TOGGLE_MENU_CLOSED, TOGGLE_MENU_OPEN,
  ACTIVATE_MY_PROFILE_TAB, ACTIVATE_LIBRARY_TAB,
  ACTIVATE_UPLOAD_TAB, ACTIVATE_SETTINGS_TAB,
  ACTIVATE_BOARD_TAB
} from '../constants/actionTypes';

const initialState = {
  menuIsOpen: false,
  tabs: [
    {
      name: 'My Profile',
      isActive: false
    },
    {
      name: 'Library',
      isActive: false
    },
    {
      name: 'Upload',
      isActive: false
    },
    {
      name: 'Settings',
      isActive: false
    },
    {
      name: 'Board',
      isActive: false
    }
  ]
};

const uiState = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU_CLOSED:
      return {
        ...state,
        menuIsOpen: false
      };
    case TOGGLE_MENU_OPEN:
      return {
        ...state,
        menuIsOpen: true
      };
    case ACTIVATE_MY_PROFILE_TAB:
      return {
        ...state
      };
    default:
      return state;
  };
};

export default uiState;