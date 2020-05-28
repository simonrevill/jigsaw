import { combineReducers } from 'redux';

import uiState from './uiState';
import users from './users';

export default combineReducers({ uiState, users });