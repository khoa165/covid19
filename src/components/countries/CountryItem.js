import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import '../../styles/Data.scss';

const CountryItem = ({ country }) => {
  return (
    <div className='country-item'>
      <h1>{country.Country}</h1>
      <Row>
        <Col lg='4'>
          <div className='stat-box red'>
            <p>New confirmed: {country.NewConfirmed}</p>
          </div>
        </Col>
        <Col lg='4'>
          <div className='stat-box black mx-lg-2'>
            <p>New deaths: {country.NewDeaths}</p>
          </div>
        </Col>
        <Col lg='4'>
          <div className='stat-box blue'>
            <p>New recovered: {country.NewRecovered}</p>
          </div>
        </Col>
        <Col lg='4'>
          <div className='stat-box red'>
            <p>Total confirmed: {country.TotalConfirmed}</p>
          </div>
        </Col>
        <Col lg='4'>
          <div className='stat-box black mx-lg-2'>
            <p>Total deaths: {country.TotalDeaths}</p>
          </div>
        </Col>
        <Col lg='4'>
          <div className='stat-box blue'>
            <p>Total recovered: {country.TotalRecovered}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

CountryItem.propTypes = {
  country: PropTypes.object.isRequired
};

export default CountryItem;
