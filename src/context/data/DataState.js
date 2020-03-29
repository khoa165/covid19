import React, { useReducer } from 'react';
import axios from 'axios';
import DataContext from './dataContext';
import DataReducer from './dataReducer';
import { GET_ALL_COUNTRIES_DATA, SET_LOADING } from '../types';

const DataState = props => {
  const initialState = {
    countries: [],
    loading: false
  };
  const [state, dispatch] = useReducer(DataReducer, initialState);

  // Get data summary of all countries.
  const getSummary = async () => {
    setLoading();
    const res = await axios.get('https://api.covid19api.com/summary');
    console.log(res.data.Countries.length);
    dispatch({
      type: GET_ALL_COUNTRIES_DATA,
      payload: res.data.Countries
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <DataContext.Provider
      value={{
        countries: state.countries,
        loading: state.loading,
        getSummary
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
