import { getUserFavourites } from './users';

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