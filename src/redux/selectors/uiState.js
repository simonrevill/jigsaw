export const getMenuIsOpen = store => store.uiState.menuIsOpen;
export const getTabs = store => store.uiState.tabs;
export const getImageBrowserTabStates = store => store.uiState.library.imageBrowser.activeTabs;

export const getActiveImageBrowserTabName = store => {
  const tabStates = getImageBrowserTabStates(store);
  const activeTab = tabStates.filter(tab => tab.isActive)[0];
  return activeTab.name;
};

export const getMainImageLibrary = store => store.uiState.imageLibrary;