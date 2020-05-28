export const getCurrentUser = store => store.users.currentUser;

export const getCurrentUserInfo = store => {
  const { currentUserInfo } = store.users;
  return currentUserInfo;
};

export const getUserPreferences = store => {
  const { userPreferences } = store.users.currentUserInfo;
  return userPreferences;
};

export const getUserShowBackgroundImage = store => {
  const userPreferences = getUserPreferences(store);
  const { showBackgroundImage } = userPreferences.difficulty;
  return showBackgroundImage;
};

export const getUserShowGridOverlay = store => {
  const userPreferences = getUserPreferences(store);
  const { showGridOverlay } = userPreferences.difficulty;
  return showGridOverlay;
};

export const getUserShowCorrectPlacement = store => {
  const userPreferences = getUserPreferences(store);
  const { showCorrectPlacement } = userPreferences.difficulty;
  return showCorrectPlacement;
};