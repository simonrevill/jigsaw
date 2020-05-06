import initialState from './initialState.js';
import {
  DARK_MODE_OFF, DARK_MODE_ON, SHOW_BACKGROUND_IMAGE_OFF, SHOW_BACKGROUND_IMAGE_ON,
  SHOW_GRID_OVERLAY_OFF, SHOW_GRID_OVERLAY_ON, SHOW_CORRECT_PLACEMENT_OFF, SHOW_CORRECT_PLACEMENT_ON
} from '../constants/constants';

const defaultSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_OFF:
      return {
        ...state,
        defaultSettings: {
          ...state.defaultSettings,
          darkMode: false
        }
      };
    case DARK_MODE_ON:
      return {
        ...state,
        defaultSettings: {
          ...state.defaultSettings,
          darkMode: true
        }
      };
    case SHOW_BACKGROUND_IMAGE_OFF:
      return {
        ...state,
        defaultSettings: {
          ...state.defaultSettings,
          showBackgroundImage: false
        }
      };
    case SHOW_BACKGROUND_IMAGE_ON:
      return {
        ...state,
        defaultSettings: {
          ...state.defaultSettings,
          showBackgroundImage: true
        }
      };
    case SHOW_GRID_OVERLAY_OFF:
      return {
        ...state,
        defaultSettings: {
          ...state.defaultSettings,
          showGridOverlay: false
        }
      };
    case SHOW_GRID_OVERLAY_ON:
      return {
        ...state,
        defaultSettings: {
          ...state.defaultSettings,
          showGridOverlay: true
        }
      };
    case SHOW_CORRECT_PLACEMENT_OFF:
      return {
        ...state,
        defaultSettings: {
          ...state.defaultSettings,
          showCorrectPlacement: false
        }
      };
    case SHOW_CORRECT_PLACEMENT_ON:
      return {
        ...state,
        defaultSettings: {
          ...state.defaultSettings,
          showCorrectPlacement: true
        }
      };
    default:
      return state;
  }
}

export default defaultSettingsReducer;