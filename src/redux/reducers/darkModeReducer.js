import { DARK_MODE_OFF, DARK_MODE_ON } from '../constants/constants';

const initialState = {
  defaultSettings: {
    darkMode: true
  }
};

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_OFF:
      return {
        defaultSettings: {
          darkMode: false
        }
      };
    case DARK_MODE_ON:
      return {
        defaultSettings: {
          darkMode: true
        }
      };
    default:
      return state;
  }
}

export default darkModeReducer;