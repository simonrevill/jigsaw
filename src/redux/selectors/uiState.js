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

  // Check is currentSelectedImage id matches any of the userFavourites:
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