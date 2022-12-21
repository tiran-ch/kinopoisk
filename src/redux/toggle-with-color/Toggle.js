const initialToggle ={
  toggle: false
};

export function toggle(state = initialToggle, action) {
  switch (action.type) {
    case"SET_TOGGLE_VALUE":
      return{
        ...state,
        toggle: action.payload
      };
    default:
      return state

  }
}