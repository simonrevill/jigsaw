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
      isActive: true
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
        ...state,
        tabs: state.tabs.map(tab => {
          if (tab.name === action.tabName) {
            tab.isActive = true;
            return tab;
          }
          tab.isActive = false;
          return tab;
        })
      };
    case ACTIVATE_LIBRARY_TAB:
      return {
        ...state,
        tabs: state.tabs.map(tab => {
          if (tab.name === action.tabName) {
            tab.isActive = true;
            return tab;
          }
          tab.isActive = false;
          return tab;
        })
      };
    case ACTIVATE_UPLOAD_TAB:
      return {
        ...state,
        tabs: state.tabs.map(tab => {
          if (tab.name === action.tabName) {
            tab.isActive = true;
            return tab;
          }
          tab.isActive = false;
          return tab;
        })
      };
    case ACTIVATE_SETTINGS_TAB:
      return {
        ...state,
        tabs: state.tabs.map(tab => {
          if (tab.name === action.tabName) {
            tab.isActive = true;
            return tab;
          }
          tab.isActive = false;
          return tab;
        })
      };
    case ACTIVATE_BOARD_TAB:
      return {
        ...state,
        tabs: state.tabs.map(tab => {
          if (tab.name === action.tabName) {
            tab.isActive = true;
            return tab;
          }
          tab.isActive = false;
          return tab;
        })
      };
    default:
      return state;
  };
};

export default uiState;