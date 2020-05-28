import { SET_CURRENT_USER } from '../../constants/actionTypes';

const setCurrentUser = data => (
  {
    type: SET_CURRENT_USER,
    currentUserInfo: data
  }
);

export default setCurrentUser;