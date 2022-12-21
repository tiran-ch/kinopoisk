const searching ={
  search: []
};

export function searchData(state = searching, action) {
  switch (action.type) {
    case"search_data":
      return{
        ...state,
        search: action.payload
      };
      default:
        return state

  }
}