export const getCurrentUser = store => store.users.currentUser;

export const getCurrentUserInfo = store => {
  const { currentUserInfo } = store.users;
  return currentUserInfo;
};

export const getUserPreferences = store => {
  const { userPreferences } = store.users.currentUserInfo;
  return userPreferences;
};

export const getUserFavourites = store => store.users.currentUserInfo.favourites.imageLibrary;

export const getUserLibraryFavourites = store => store.users.currentUserInfo.favourites.userImageLibrary;

const getUserImageLibrary = store => {
  const userImageLibrary = store.users.currentUserInfo.userImageLibrary;
  // Transform user's personal image library into an array for use with Redux store:
  const userImageLibraryTransformed = Object.keys(userImageLibrary).map(id => userImageLibrary[id]);
  return userImageLibraryTransformed;
};

const addFavouritesToUserImageLibrary = (userImageLibrary, userLibraryFavourites) => {
  const userLibraryWithFavourites = userImageLibrary.map(image => {
    const imageUrl = image.url;
    const matchingUserFavourite = userLibraryFavourites.filter(userFavourite => userFavourite.url === imageUrl);

    if (imageUrl && matchingUserFavourite.length) {
      image.rating = matchingUserFavourite[0].rating;
      image.isUserFavourite = true;
      return image;
    }

    image.rating = 0;
    image.isUserFavourite = false;
    return image;
  });

  return userLibraryWithFavourites;
};
const getUserImageLibraryWithFavourites = store => {
  const userImageLibraryFavourites = getUserLibraryFavourites(store);
  const userImageLibrary = getUserImageLibrary(store);
  const userImageLibraryWithFavourites = addFavouritesToUserImageLibrary(userImageLibrary, userImageLibraryFavourites);
  return userImageLibraryWithFavourites;
};

export const getTheUserImageLibrary = store => getUserImageLibraryWithFavourites(store);