const pagesCount = {
  page: "",
  onePage: "1"
};

export function initialFilmsCount(state = pagesCount, action) {
  switch (action.type) {
    case"pagesCount":
      return{
        ...state,
        page: action.payload
      };
    case"onePage":
      return{
        ...state,
        onePage:action.payload
      };
    default:
      return state
  }
}