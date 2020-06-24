import {
  TOGGLE_MENU, SET_ACTIVE_TAB, SET_ACTIVE_IMAGE_BROWSER_TAB, SET_IMAGE_LIBRARY, SET_GRID_SETTING
} from '../constants/actionTypes';

const initialState = {
  menuIsOpen: true,
  tabs: [
    {
      name: 'My Profile',
      isActive: false
    },
    {
      name: 'Library',
      isActive: true
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
  ],
  library: {
    imageBrowser: {
      activeTabs: [
        {
          name: 'mainLibrary',
          isActive: true
        },
        {
          name: 'userLibrary',
          isActive: false
        }
      ]
    },
    boardSetup: {
      gridSetting: 8
    }
  },
  imageLibrary: [],
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
      };
    case SET_ACTIVE_IMAGE_BROWSER_TAB:
      return {
        ...state,
        library: {
          ...state.library,
          imageBrowser: {
            ...state.library.imageBrowser,
            activeTabs: state.library.imageBrowser.activeTabs.map(tab => tab.name === action.tabName ?
              ({ ...tab, isActive: true }) :
              ({ ...tab, isActive: false })
            )
          }
        }
      };
    case SET_IMAGE_LIBRARY:
      return {
        ...state,
        imageLibrary: action.data
      };
    case SET_GRID_SETTING:
      return {
        ...state,
        library: {
          ...state.library,
          boardSetup: {
            ...state.library.boardSetup,
            gridSetting: action.gridSetting
          }
        }
      };
    default:
      return state;
  };
};

export default uiState;