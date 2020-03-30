import React from 'react';
import Search from '../countries/Search';
import Countries from '../countries/Countries';

const Landing = () => {
  return (
    <div id='landing-page'>
      <Search />
      <Countries />
    </div>
  );
};

export default Landing;
