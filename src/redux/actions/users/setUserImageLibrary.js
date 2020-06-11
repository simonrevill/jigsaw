import { SET_USER_IMAGE_LIBRARY } from '../../constants/actionTypes';

const setUserImageLibrary = data => {
  return { type: SET_USER_IMAGE_LIBRARY, data };
};

export default setUserImageLibrary;