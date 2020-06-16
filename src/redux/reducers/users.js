import { SET_CURRENT_USER } from '../constants/actionTypes';
import {
  TOGGLE_DARK_MODE, TOGGLE_BACKGROUND_IMAGE, TOGGLE_GRID_OVERLAY, TOGGLE_CORRECT_PLACEMENT, SET_USER_IMAGE_LIBRARY
} from '../constants/actionTypes';

const initialState = {
  currentUser: '8888888888888888',
  currentUserInfo: {
    aboutMe: "I'm a blank Jigsaw User. Nothing to see here.",
    age: null,
    email: 'blankjigsawuser@jigsaw.org',
    favourites: {
      imageLibrary: [
        {
          "id": "51058e2a-3c0d-43f2-bd0b-c5f704b88933",
          "name": "bird.jpg",
          "rating": 2,
          "url": "https://jigsaw-image-library.s3.eu-west-2.amazonaws.com/image-library/images/bird.jpg"
        },
        {
          "id": "0354494b-b294-4021-80b6-963ee0db09a6",
          "name": "porsche.jpg",
          "rating": 4,
          "url": "https://jigsaw-image-library.s3.eu-west-2.amazonaws.com/image-library/images/porsche.jpg"
        }
      ],
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
    case SET_USER_IMAGE_LIBRARY:
      return {
        ...state,
        currentUserInfo: {
          ...state.currentUserInfo,
          userImageLibrary: [
            ...state.currentUserInfo.userImageLibrary,
            action.data
          ]
        },
      };
    default:
      return state;
  }
};

export default users;