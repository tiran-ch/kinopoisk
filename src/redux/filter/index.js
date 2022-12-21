const genresCountry = {
  genre: null,
  country: null
};

export function filter(state = genresCountry, action) {
  switch (action.type) {
    case"genre":
      return{
        ...state,
        genre: action.payload
      };
     case"country":
      return{
        ...state,
        country: action.payload
      };
    default: return state;
  }
}