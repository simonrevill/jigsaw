export const getCurrentUser = store => store.users.currentUser;

export const getCurrentUserInfo = store => {
  const currentUserInfo = store.users.currentUserInfo;
  return currentUserInfo;
};