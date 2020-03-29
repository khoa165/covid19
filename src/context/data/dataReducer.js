import { GET_ALL_COUNTRIES_DATA, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES_DATA:
      return {
        ...state,
        countries: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
