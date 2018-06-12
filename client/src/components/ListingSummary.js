import React, { Component } from 'react';

function ListingSummary (props) {
  var listing = props.listing.StandardFields;

  return (
    <ul className='featured-list'>
      <li key={listing.ListingId} className='listing-summary'>
        <ul>
          <li>
            <img
              className='listing-primary-photo'
              src={listing.Photos[0].Uri300}
              alt={'Primary photo for' + listing.ListingId}
            />
          </li>
        </ul>
        <ul className='space-list-summary'>
          <li className='list-price'>${listing.CurrentPrice}</li>
          <li className='list-info'>{listing.BedsTotal} Beds | {listing.BathsTotal} Baths | {listing.BuildingAreaTotal} SQFT</li>
          <li className='list-address'>{listing.UnparsedFirstLineAddress}</li>
          <li className='list-address'>{listing.City}, {listing.StateOrProvince} {listing.PostalCode}</li>
          <li className='list-info'>{listing.SubdivisionName} Subdivision</li>
        </ul>
      </li>
    </ul>
  )
}

ListingSummary.propTypes = {
  featuredListings: PropTypes.array.isRequired
}

export default ListingSummary;