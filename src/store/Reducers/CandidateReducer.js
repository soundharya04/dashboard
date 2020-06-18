const initState = {
  candidates: {},
  toggleSidebar: true,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CANDIDATES":
      return {
        ...state,
        candidates: action.payload,
      };

    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        toggleSidebar: !state.toggleSidebar,
      };
    default:
      return null;
  }
};

export default reducer;
