export const getCurrentUser = store => store.users.currentUser;

export const getCurrentUserInfo = store => {
  const currentUser = getCurrentUser(store);
  const registeredUsers = store.users.registeredUsers;
  const currentUserInfo = registeredUsers[currentUser];
  return currentUserInfo;
};