const getFilm ={
  filmItem: []
};

export function filmItem(state = getFilm, action) {
  switch (action.type) {
    case"FILM_ITEM":
      return{
        ...state,
        filmItem: action.payload
      };
      default:
        return state
  }
}