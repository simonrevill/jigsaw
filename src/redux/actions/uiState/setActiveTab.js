import { SET_ACTIVE_TAB } from '../../constants/actionTypes';

const setActiveTab = tabName => ({ type: SET_ACTIVE_TAB, tabName });

export default setActiveTab;