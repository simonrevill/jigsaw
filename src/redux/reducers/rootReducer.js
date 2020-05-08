import { combineReducers } from 'redux';

import defaultSettings from './defaultSettings';
import uiState from './uiState';

export default combineReducers({ defaultSettings, uiState });