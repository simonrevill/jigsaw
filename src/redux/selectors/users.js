export const getCurrentUser = store => store.users.currentUser;

export const getCurrentUserInfo = store => {
  const currentUserInfo = store.users.currentUserInfo;
  return currentUserInfo;
};

export const getUserPreferences = store => {
  const userPreferences = store.users.currentUserInfo.userPreferences;
  return userPreferences;
};

export const getUserShowBackgroundImage = store => {
  const userPreferences = getUserPreferences(store);
  const showBackgroundImage = userPreferences.difficulty.showBackgroundImage;
  return showBackgroundImage;
};

export const getUserShowGridOverlay = store => {
  const userPreferences = getUserPreferences(store);
  const showGridOverlay = userPreferences.difficulty.showGridOverlay;
  return showGridOverlay;
};

export const getUserShowCorrectPlacement = store => {
  const userPreferences = getUserPreferences(store);
  const showCorrectPlacement = userPreferences.difficulty.showCorrectPlacement;
  return showCorrectPlacement;
};