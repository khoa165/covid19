import {
  GET_ALL_COUNTRIES_DATA,
  FILTER_COUNTRIES,
  SET_LOADING,
  CLEAR_FILTER_COUNTRIES
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES_DATA:
      return {
        ...state,
        countries: action.payload,
        loading: false
      };
    case FILTER_COUNTRIES:
      return {
        ...state,
        filtered: state.countries.filter(country => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return country.Country.match(regex) || country.Slug.match(regex);
        })
      };
    case CLEAR_FILTER_COUNTRIES:
      return {
        ...state,
        filtered: null
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
