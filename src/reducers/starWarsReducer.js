import { FETCH_CHARACTERS, CHARACTERS_RECEIVED, FETCH_ERROR } from '../actions';
const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, fetching: true };
    case CHARACTERS_RECEIVED:
      return {
        ...state,
        fetching: false,
        characters: [...state.characters, ...action.payload]
      };
    case FETCH_ERROR:
      console.log(action.error);
      return { ...state, error: action.error };
    default:
      return state;
  }
};
