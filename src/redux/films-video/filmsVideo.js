const getFilms ={
  films: []
};

export function filmData(state = getFilms, action) {
  switch (action.type) {
    case"films":
      return{
        ...state,
        films: action.payload
      };
    default:
      return state

  }
}