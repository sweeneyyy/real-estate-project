import React from 'react';
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
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default BuyOrSellSections;