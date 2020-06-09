import { SET_IMAGE_LIBRARY } from '../../constants/actionTypes';

const setImageLibrary = data => {
  return { type: SET_IMAGE_LIBRARY, data };
};

export default setImageLibrary;