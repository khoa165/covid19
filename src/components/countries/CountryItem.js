import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryItem = ({ country }) => {
  return (
    <div className='country-item'>
      <h1>{country.Country}</h1>
    </div>
  );
};

CountryItem.propTypes = {
  country: PropTypes.object.isRequired
};

export default CountryItem;
