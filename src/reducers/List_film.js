import * as types from "../actionTypes/index";
const initialState = [];
const List_filmsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_FILMS:
      return action.payload;

    default:
      break;
  }
  return state;
};

export default List_filmsReducers;
