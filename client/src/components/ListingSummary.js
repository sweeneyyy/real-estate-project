import React from 'react';
// import PropTypes from 'prop-types';

function ListingSummary (props) {
  const listing = props.listing.StandardFields;

  return (
    <li key={props.listingId} className='listing-summary'>
      <ul>
        <li>
          <img  
            className='listing-primary-photo'
            src={listing.Photos[0].Uri300}
            alt={'Primary photo for' + listing.listingId}
          />
        </li>
      </ul>
      <ul className='space-list-summary'>
        <li className='list-price'>${new Intl.NumberFormat().format(listing.CurrentPrice)}</li>
        <li className='list-info'>{listing.BedsTotal} Beds | {listing.BathsTotal} Baths | {listing.BuildingAreaTotal} SQFT</li>
        <li className='list-address'>{listing.UnparsedFirstLineAddress}</li>
        <li className='list-address'>{listing.City}, {listing.StateOrProvince} {listing.PostalCode}</li>
        <li className='list-info'>{listing.SubdivisionName} Subdivision</li>
      </ul>
    </li>
  )
}


export default ListingSummary;