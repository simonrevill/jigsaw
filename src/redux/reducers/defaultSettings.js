import {
  DARK_MODE_OFF, DARK_MODE_ON, SHOW_BACKGROUND_IMAGE_OFF, SHOW_BACKGROUND_IMAGE_ON,
  SHOW_GRID_OVERLAY_OFF, SHOW_GRID_OVERLAY_ON, SHOW_CORRECT_PLACEMENT_OFF, SHOW_CORRECT_PLACEMENT_ON
} from '../constants/actionTypes';

const initialState = {
  darkMode: true,
  showBackgroundImage: true,
  showGridOverlay: true,
  showCorrectPlacement: false,
  defaultGridSize: 8
};

const defaultSettings = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_OFF:
      return {
        ...state,
        darkMode: false
      };
    case DARK_MODE_ON:
      return {
        ...state,
        darkMode: true
      };
    case SHOW_BACKGROUND_IMAGE_OFF:
      return {
        ...state,
        showBackgroundImage: false
      };
    case SHOW_BACKGROUND_IMAGE_ON:
      return {
        ...state,
        showBackgroundImage: true
      };
    case SHOW_GRID_OVERLAY_OFF:
      return {
        ...state,
        showGridOverlay: false
      };
    case SHOW_GRID_OVERLAY_ON:
      return {
        ...state,
        showGridOverlay: true
      };
    case SHOW_CORRECT_PLACEMENT_OFF:
      return {
        ...state,
        showCorrectPlacement: false
      };
    case SHOW_CORRECT_PLACEMENT_ON:
      return {
        ...state,
        showCorrectPlacement: true
      };
    default:
      return state;
  }
};

export default defaultSettings;