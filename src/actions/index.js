import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const CHARACTERS_RECEIVED = 'CHARACTERS_RECEIVED';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchCharacters = () => dispatch => {
  dispatch({
    type: FETCH_CHARACTERS
  });
  axios
    .get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people')
    .then(res => {
      console.log('response:', res.data.results);
      dispatch({
        type: CHARACTERS_RECEIVED,
        payload: res.data.results
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_ERROR, error: err });
    });
};
