const initialState = {
  films: [],
  bestFilms: []
};

export function films(state = initialState, action) {
  switch (action.type) {
    case "SET_BEST_FILMS":
      return{
        ...state,
        bestFilms: action.payload
      };
    case "SET_FILMS":
      return{
        ...state,
        films: action.payload
      };
    default:
      return state
  }
}