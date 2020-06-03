import { SET_CURRENT_USER } from '../constants/actionTypes';
import {
  TOGGLE_DARK_MODE, TOGGLE_BACKGROUND_IMAGE, TOGGLE_GRID_OVERLAY, TOGGLE_CORRECT_PLACEMENT
} from '../constants/actionTypes';

const initialState = {
  currentUser: '8888888888888888',
  currentUserInfo: {
    aboutMe: "I'm a blank Jigsaw User. Nothing to see here.",
    age: null,
    email: 'blankjigsawuser@jigsaw.org',
    favourites: {
      imageLibrary: [],
      userImageLibrary: []
    },
    firstName: 'Blank',
    lastName: 'Jigsaw User',
    userId: '8888888888888888',
    userImageLibrary: [],
    userName: 'blankJigsawUser',
    userPreferences: {
      darkMode: true,
      difficulty: {
        showBackgroundImage: false,
        showGridOverlay: false,
        showCorrectPlacement: false
      },
    }
  }
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        currentUserInfo: {
          ...state.currentUserInfo,
          userPreferences: {
            ...state.currentUserInfo.userPreferences,
            darkMode: !state.currentUserInfo.userPreferences.darkMode
          }
        }
      };
    case TOGGLE_BACKGROUND_IMAGE:
      return {
        ...state,
        currentUserInfo: {
          ...state.currentUserInfo,
          userPreferences: {
            ...state.currentUserInfo.userPreferences,
            difficulty: {
              ...state.currentUserInfo.userPreferences.difficulty,
              showBackgroundImage: !state.currentUserInfo.userPreferences.difficulty.showBackgroundImage
            }
          }
        }
      };
    case TOGGLE_GRID_OVERLAY:
      return {
        ...state,
        currentUserInfo: {
          ...state.currentUserInfo,
          userPreferences: {
            ...state.currentUserInfo.userPreferences,
            difficulty: {
              ...state.currentUserInfo.userPreferences.difficulty,
              showGridOverlay: !state.currentUserInfo.userPreferences.difficulty.showGridOverlay
            }
          }
        }
      };
    case TOGGLE_CORRECT_PLACEMENT:
      return {
        ...state,
        currentUserInfo: {
          ...state.currentUserInfo,
          userPreferences: {
            ...state.currentUserInfo.userPreferences,
            difficulty: {
              ...state.currentUserInfo.userPreferences.difficulty,
              showCorrectPlacement: !state.currentUserInfo.userPreferences.difficulty.showCorrectPlacement
            }
          }
        }
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUserInfo.userId,
        currentUserInfo: {
          ...action.currentUserInfo
        }
      };
    default:
      return state;
  }
};

export default users;