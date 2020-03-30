import React, { useContext, useEffect, useRef } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import DataContext from '../../context/data/dataContext';

const Search = () => {
  const dataContext = useContext(DataContext);
  const text = useRef('');

  const { filterCountries, clearFilterCountries, filtered } = dataContext;

  useEffect(() => {
    if (filtered === '') {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterCountries(e.target.value);
    } else {
      clearFilterCountries();
    }
  };
  return (
    <Form>
      <FormGroup>
        <Input
          ref={text}
          type='text'
          placeholder='Search for country'
          onChange={onChange}
        />
      </FormGroup>
    </Form>
  );
};

export default Search;
