export const getCurrentUser = store => store.users.currentUser;

export const getCurrentUserInfo = store => {
  const { currentUserInfo } = store.users;
  return currentUserInfo;
};

export const getUserPreferences = store => {
  const { userPreferences } = store.users.currentUserInfo;
  return userPreferences;
};

export const getTheUserImageLibrary = store => store.users.currentUserInfo.userImageLibrary;