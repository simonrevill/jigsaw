import initialState from './initialState.js';
import { DARK_MODE_OFF, DARK_MODE_ON } from '../constants/constants';

const defaultSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_OFF:
      return {
        ...state,
        defaultSettings: {
          darkMode: false
        }
      };
    case DARK_MODE_ON:
      return {
        ...state,
        defaultSettings: {
          darkMode: true
        }
      };
    default:
      return state;
  }
}

export default defaultSettingsReducer;