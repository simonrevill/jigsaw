import {
  TOGGLE_DARK_MODE, TOGGLE_BACKGROUND_IMAGE, TOGGLE_GRID_OVERLAY, TOGGLE_CORRECT_PLACEMENT
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
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      };
    case TOGGLE_BACKGROUND_IMAGE:
      return {
        ...state,
        showBackgroundImage: !state.showBackgroundImage
      };
    case TOGGLE_GRID_OVERLAY:
      return {
        ...state,
        showGridOverlay: !state.showGridOverlay
      };
    case TOGGLE_CORRECT_PLACEMENT:
      return {
        ...state,
        showCorrectPlacement: !state.showCorrectPlacement
      };
    default:
      return state;
  }
};

export default defaultSettings;