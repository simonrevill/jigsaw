import { SET_CURRENT_USER } from '../constants/actionTypes';

const initialState = {
  currentUser: '',
  currentUserInfo: {
    aboutMe: '',
    age: undefined,
    email: '',
    favourites: {
      imageLibrary: [],
      userImageLibrary: []
    },
    firstName: '',
    lastName: '',
    userId: '',
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