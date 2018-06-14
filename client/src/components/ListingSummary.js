import React, { Component } from 'react';
// import PropTypes from 'prop-types';


function ListingSummary (props) {
  // const priceFormatter = new Int16Array.NumberFormat();

  return (
    <ul className='featured-list'>
      <li key={props.listingId} className='listing-summary'>
        <ul>
          <li>
            <img  
              className='listing-primary-photo'
              src={props.listing.StandardFields.Photos[0].Uri300}
              alt={'Primary photo for' + props.listing.StandardFields.listingId}
            />
          </li>
        </ul>
        <ul className='space-list-summary'>
          {/* <li className='list-price'>${priceFormatter.format(props.listing.StandardFields.CurrentPrice)}</li> */}
          <li className='list-info'>{props.listing.StandardFields.BedsTotal} Beds | {props.listing.StandardFields.BathsTotal} Baths | {props.listing.StandardFields.BuildingAreaTotal} SQFT</li>
          <li className='list-address'>{props.listing.StandardFields.UnparsedFirstLineAddress}</li>
          <li className='list-address'>{props.listing.StandardFields.City}, {props.listing.StandardFields.StateOrProvince} {props.listing.StandardFields.PostalCode}</li>
          <li className='list-info'>{props.listing.StandardFields.SubdivisionName} Subdivision</li>
        </ul>
      </li>
    </ul>
  )
}


export default ListingSummary;