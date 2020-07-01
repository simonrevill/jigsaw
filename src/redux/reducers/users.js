import { SET_CURRENT_USER } from '../constants/actionTypes';
import {
  TOGGLE_DARK_MODE, TOGGLE_BACKGROUND_IMAGE, TOGGLE_GRID_OVERLAY,
  TOGGLE_CORRECT_PLACEMENT, SET_USER_IMAGE_LIBRARY, ADD_FAVOURITE_LIBRARY_IMAGE,
  DELETE_FAVOURITE_LIBRARY_IMAGE, DELETE_FAVOURITE_USER_LIBRARY_IMAGE, ADD_FAVOURITE_USER_LIBRARY_IMAGE
} from '../constants/actionTypes';

const initialState = {
  currentUser: 'e5aa91dc-4017-44f4-a327-666565d2026c',
  currentUserInfo: {
    aboutMe: "I'm a blank Jigsaw User. Nothing to see here.",
    age: null,
    email: 'blankjigsawuser@jigsaw.org',
    favourites: {
      imageLibrary: [
        {
          "id": "71ff8060-fcf2-4523-98e5-f48127d7d88b",
          "name": "bird.jpg",
          "rating": 1,
          "url": "https://s3.eu-west-2.amazonaws.com/jigsaw-image-library/image-library/images/bird.jpg"
        }
      ],
      userImageLibrary: []
    },
    firstName: 'Blank',
    lastName: 'Jigsaw User',
    userId: 'e5aa91dc-4017-44f4-a327-666565d2026c',
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
      console.log('action data: ', action.data);
      return {
        ...state,
        currentUserInfo: {
          ...state.currentUserInfo,
          userImageLibrary: [
            ...state.currentUserInfo.userImageLibrary.concat(action.data)
          ]
        },
      };
    case DELETE_FAVOURITE_LIBRARY_IMAGE:
      return {
        ...state,
        currentUserInfo: {
          ...state.currentUserInfo,
          favourites: {
            ...state.currentUserInfo.favourites,
            imageLibrary: state.currentUserInfo.favourites.imageLibrary.filter(image => image.id !== action.id)
          }
        },
      };
    case ADD_FAVOURITE_LIBRARY_IMAGE:
      return {
        ...state,
        currentUserInfo: {
          ...state.currentUserInfo,
          favourites: {
            ...state.currentUserInfo.favourites,
            imageLibrary: state.currentUserInfo.favourites.imageLibrary.concat(action.newFavourite)
          }
        },
      };
    case DELETE_FAVOURITE_USER_LIBRARY_IMAGE:
      return {
        ...state,
        currentUserInfo: {
          ...state.currentUserInfo,
          favourites: {
            ...state.currentUserInfo.favourites,
            userImageLibrary: state.currentUserInfo.favourites.userImageLibrary.filter(image => image.id !== action.id)
          }
        },
      };
    case ADD_FAVOURITE_USER_LIBRARY_IMAGE:
      return {
        ...state,
        currentUserInfo: {
          ...state.currentUserInfo,
          favourites: {
            ...state.currentUserInfo.favourites,
            userImageLibrary: state.currentUserInfo.favourites.userImageLibrary.concat(action.newFavourite)
          }
        },
      };
    default:
      return state;
  }
};

export default users;