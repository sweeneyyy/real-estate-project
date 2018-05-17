import React, { Component } from 'react';
import PropTypes from 'prop-types';

function BuyOrSellSections(props) {
  return (
    <div className='buy-sections'>
      <h3>
        <i className={props.icon}></i>
        {props.heading}
      </h3>
        <p>{props.text}</p>
    </div>
  );
}

BuyOrSellSections.PropTypes = {
  icon: PropTypes.string.isRequired,
  buySectionHeader: PropTypes.string.isRequired,
  buySectionText: PropTypes.string.isRequired
}

export default BuyOrSellSections;