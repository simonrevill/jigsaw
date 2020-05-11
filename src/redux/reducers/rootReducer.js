import { combineReducers } from 'redux';

import defaultSettings from './defaultSettings';
import uiState from './uiState';
import users from './users';

export default combineReducers({ defaultSettings, uiState, users });