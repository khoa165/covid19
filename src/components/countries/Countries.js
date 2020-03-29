import React, { useContext, useEffect } from 'react';
import CountryItem from './CountryItem';
import Spinner from '../layout/Spinner';
import DataContext from '../../context/data/dataContext';

const Countries = () => {
  const dataContext = useContext(DataContext);
  const { loading, countries, getSummary } = dataContext;

  useEffect(() => {
    getSummary();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div id='countries'>
        {countries.map(country => (
          <CountryItem key={country.CountrySlug} country={country} />
        ))}
      </div>
    );
  }
};

export default Countries;
