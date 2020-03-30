import React, { useReducer } from 'react';
import axios from 'axios';
import DataContext from './dataContext';
import DataReducer from './dataReducer';
import {
  GET_ALL_COUNTRIES_DATA,
  FILTER_COUNTRIES,
  CLEAR_FILTER_COUNTRIES,
  SET_LOADING
} from '../types';

const DataState = props => {
  const initialState = {
    countries: [],
    filtered: null,
    loading: false
  };
  const [state, dispatch] = useReducer(DataReducer, initialState);

  // Get data summary of all countries.
  const getSummary = async () => {
    setLoading();
    const res = await axios.get('https://api.covid19api.com/summary');
    dispatch({
      type: GET_ALL_COUNTRIES_DATA,
      payload: res.data.Countries
    });
  };

  // Filter country.
  const filterCountries = text => {
    dispatch({ type: FILTER_COUNTRIES, payload: text });
  };

  // Clear filter.
  const clearFilterCountries = () => {
    dispatch({ type: CLEAR_FILTER_COUNTRIES });
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <DataContext.Provider
      value={{
        countries: state.countries,
        filtered: state.filtered,
        loading: state.loading,
        getSummary,
        filterCountries,
        clearFilterCountries
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
