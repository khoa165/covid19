import React, { useContext, useEffect } from 'react';
import CountryItem from './CountryItem';
import Spinner from '../layout/Spinner';
import DataContext from '../../context/data/dataContext';

const Countries = () => {
  const dataContext = useContext(DataContext);
  const { loading, countries, filtered, getSummary } = dataContext;

  useEffect(() => {
    getSummary();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <div id='countries'>
      {filtered === null ? (
        countries.map(
          country =>
            country.Country &&
            country.Country !== 'Viet Nam' && (
              <CountryItem key={country.CountrySlug} country={country} />
            )
        )
      ) : filtered.length > 0 ? (
        filtered.map(
          country =>
            country.Country &&
            country.Country !== 'Viet Nam' && (
              <CountryItem key={country.CountrySlug} country={country} />
            )
        )
      ) : (
        <h1 className='no-data-notice'>
          Unfortunately, no countries found. Please try again!
        </h1>
      )}
    </div>
  );
};

export default Countries;
