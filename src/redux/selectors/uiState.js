export const getMenuIsOpen = store => store.uiState.menuIsOpen;

export const getTabs = store => {
  const tabs = store.uiState.tabs;
  return tabs;
};