import {
  TOGGLE_MENU, SET_ACTIVE_TAB
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
    case TOGGLE_MENU:
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen
      };
    case SET_ACTIVE_TAB:
      return {
        ...state,
        tabs: state.tabs.map(tab => tab.name === action.tabName ?
          ({ ...tab, isActive: true }) :
          ({ ...tab, isActive: false })
        )
      }
    default:
      return state;
  };
};

export default uiState;