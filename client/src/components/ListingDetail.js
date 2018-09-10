import React, { Component } from 'react';

class ListingDetail extends Component {
  render() {
    const { listing } = this.props;
    
    const subdivision = listing.StandardFields.SubdivisionName;
    const formattedSub = subdivision.toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
    
    return (
      <div className='list-detail'>
        <h3>
          {listing.StandardFields.UnparsedFirstLineAddress}, 
          {listing.StandardFields.City}, {listing.StandardFields.StateOrProvince} {listing.StandardFields.PostalCode}
        </h3>
        <img
          className='listing-primary-photo-detail'
          src={listing.StandardFields.Photos[0].Uri640}
          alt={'Photo for' + listing.StandardFields.listingId}
        />
        <h3>
          Offered at: ${new Intl.NumberFormat().format(listing.StandardFields.CurrentPrice)}
        </h3>
        <ul>
          <li>
            <strong>Subdivision:</strong> {formattedSub}
          </li>
          <li>
            <strong>Bedrooms:</strong> {listing.StandardFields.BedsTota}
          </li>
          <li>
            <strong>Bathrooms:</strong> {listing.StandardFields.BathsTotal}
          </li>
          <li>
            <strong>SqFt:</strong> {listing.StandardFields.BuildingAreaTotal} 
          </li>
          <li>
            <strong>Year Built:</strong> {listing.StandardFields.YearBuilt} 
          </li>
        </ul>
        <p>
          {listing.StandardFields.PublicRemarks}
        </p>
      </div>
    );
  }
}

export default ListingDetail;