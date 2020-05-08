const initialState = {
  menuIsOpen: false,
  myProfileTabIsSelected: false,
  libraryTabIsSelected: false,
  uploadTabIsSelected: false,
  settingsTabIsSelected: false,
  boardTabIsSelected: false
};

const uiState = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default uiState;