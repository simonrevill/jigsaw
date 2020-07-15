import { getUserFavourites, getUserLibraryFavourites } from './users';

export const getMenuIsOpen = store => store.uiState.menuIsOpen;

export const getTabs = store => store.uiState.tabs;

export const getImageBrowserTabStates = store => store.uiState.library.imageBrowser.activeTabs;

export const getActiveImageBrowserTabName = store => {
  const tabStates = getImageBrowserTabStates(store);
  const activeTab = tabStates.filter(tab => tab.isActive)[0];
  return activeTab.name;
};

const addFavouritesToImageLibrary = (mainLibrary, userFavourites) => {
  const libraryWithFavourites = mainLibrary.map(image => {
    const imageUrl = image.url;
    const matchingUserFavourite = userFavourites.filter(userFavourite => userFavourite.url === imageUrl);

    if (imageUrl && matchingUserFavourite.length) {
      image.rating = matchingUserFavourite[0].rating;
      image.isUserFavourite = true;
      return image;
    }

    image.rating = 0;
    image.isUserFavourite = false;
    return image;
  });

  return libraryWithFavourites;
};

const getImageLibraryWithFavourites = store => {
  const userFavourites = getUserFavourites(store);
  const imageLibrary = store.uiState.imageLibrary;
  const imageLibraryWithFavourites = addFavouritesToImageLibrary(imageLibrary, userFavourites);
  return imageLibraryWithFavourites;
};

export const getMainImageLibrary = store => getImageLibraryWithFavourites(store);

export const getGridSetting = store => store.uiState.library.boardSetup.gridSetting;

const combineLibraryFavourites = (mainLibrary, userLibrary) => [...mainLibrary, ...userLibrary];

const getCurrentSelectedImageWithUserAttributes = store => {
  let currentSelectedImage = store.uiState.library.currentSelectedImage;

  // Combine main and user library favourites together.
  // Makes matching faourites simpler:
  const userFavourites = combineLibraryFavourites(getUserFavourites(store), getUserLibraryFavourites(store));

  // Transform userFavourites into object to get the user attributes of the currentSelectedImage:
  const userFavouritesTransformed = userFavourites.reduce((accumulator, currentValue) => {
    accumulator[currentValue.id] = currentValue;
    return accumulator;
  }, {});

  // Check if currentSelectedImage id matches any of the userFavourites:
  const userFavouritesTransformedKeys = Object.keys(userFavouritesTransformed);
  const isFavourite = userFavouritesTransformedKeys.indexOf(currentSelectedImage.id);


  const rating = isFavourite !== -1 ? userFavouritesTransformed[currentSelectedImage.id].rating : 0;
  const isUserFavourite = isFavourite !== -1 ? true : false;

  currentSelectedImage.rating = rating;
  currentSelectedImage.isUserFavourite = isUserFavourite;

  const currentSelectedImageWithUserAttributes = { ...currentSelectedImage };
  return currentSelectedImageWithUserAttributes;
};

export const getCurrentSelectedImage = store => getCurrentSelectedImageWithUserAttributes(store);

// Main Library Selectors:

const getPreviousLibraryImageIndex = (store, currentSelectedImageIndex) => {
  const imageLibrary = store.uiState.imageLibrary;
  if (currentSelectedImageIndex > 0) return currentSelectedImageIndex - 1;
  // if currentSelectedImageIndex === 0... 
  // find the index of the last item in the imageLibrary array...
  return imageLibrary.length - 1;
};

const getNextLibraryImageIndex = (store, currentSelectedImageIndex) => {
  const imageLibrary = store.uiState.imageLibrary;
  if (currentSelectedImageIndex < (imageLibrary.length - 1)) return currentSelectedImageIndex + 1;
  // if currentSelectedImageIndex === imageLibrary.length - 1 (i.e. the last item)... 
  // return the index of the first item in the imageLibrary array...
  return 0;
};

export const getPreviousLibraryImage = store => {
  const currentSelectedImage = store.uiState.library.currentSelectedImage;
  const imageLibrary = store.uiState.imageLibrary;
  const currentSelectedImageIndex = imageLibrary.findIndex(image => image.id === currentSelectedImage.id);
  const previousLibraryImageIndex = getPreviousLibraryImageIndex(store, currentSelectedImageIndex);
  return previousLibraryImageIndex;
};

export const getNextLibraryImage = store => {
  const currentSelectedImage = store.uiState.library.currentSelectedImage;
  const imageLibrary = store.uiState.imageLibrary;
  const currentSelectedImageIndex = imageLibrary.findIndex(image => image.id === currentSelectedImage.id);
  const nextLibraryImageIndex = getNextLibraryImageIndex(store, currentSelectedImageIndex);
  return nextLibraryImageIndex;
};

// User Library Selectors:

const getPreviousUserLibraryImageIndex = (store, currentSelectedImageIndex) => {
  const userImageLibrary = store.users.currentUserInfo.userImageLibrary;
  if (currentSelectedImageIndex > 0) return currentSelectedImageIndex - 1;
  // if currentSelectedImageIndex === 0... 
  // find the index of the last item in the userImageLibrary array...
  return userImageLibrary.length - 1;
};

const getNextUserLibraryImageIndex = (store, currentSelectedImageIndex) => {
  const userImageLibrary = store.users.currentUserInfo.userImageLibrary;
  if (currentSelectedImageIndex < (userImageLibrary.length - 1)) return currentSelectedImageIndex + 1;
  // if currentSelectedImageIndex === userImageLibrary.length - 1 (i.e. the last item)... 
  // return the index of the first item in the userImageLibrary array...
  return 0;
};

export const getPreviousUserLibraryImage = store => {
  const currentSelectedImage = store.uiState.library.currentSelectedImage;
  const userImageLibrary = store.users.currentUserInfo.userImageLibrary;
  const currentSelectedImageIndex = userImageLibrary.findIndex(image => image.id === currentSelectedImage.id);
  const previousLibraryImageIndex = getPreviousUserLibraryImageIndex(store, currentSelectedImageIndex);
  return previousLibraryImageIndex;
};

export const getNextUserLibraryImage = store => {
  const currentSelectedImage = store.uiState.library.currentSelectedImage;
  const userImageLibrary = store.users.currentUserInfo.userImageLibrary;
  const currentSelectedImageIndex = userImageLibrary.findIndex(image => image.id === currentSelectedImage.id);
  const nextLibraryImageIndex = getNextUserLibraryImageIndex(store, currentSelectedImageIndex);
  return nextLibraryImageIndex;
};