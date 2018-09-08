import React, { Component } from 'react';
import axios from 'axios';

class ListingDetail extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     listingToDisplay: {}
  //   }
  // }

  // componentDidMount() {
  //   console.log(this.props)
  //   axios.get(`/listings/search/${this.props.listing}`)
  //   .then((res) => {
  //     this.setState({ listingToDisplay: res.data.D.Results })
  //     console.log('listing to display', res.data.D.Results)
  //   })
  // }

  render() {
    const { listing } = this.props;

    return (
      <div>
        <h2>Listing Detail Page</h2>
        <img
          className='listing-primary-photo-detail'
          src={listing.StandardFields.Photos[0].Uri800}
          alt={'Photo for' + listing.StandardFields.listingId}
        />
        <h4>${new Intl.NumberFormat().format(listing.StandardFields.CurrentPrice)}</h4>
        <ul className='space-list-summary'>
          <li className='list-info'>{listing.StandardFields.BedsTotal} Beds | {listing.StandardFields.BathsTotal} Baths | {listing.StandardFields.BuildingAreaTotal} SQFT</li>
          <li className='list-address'>{listing.StandardFields.UnparsedFirstLineAddress}</li>
          <li className='list-address-2'>{listing.StandardFields.City}, {listing.StandardFields.StateOrProvince} {listing.StandardFields.PostalCode}</li>
          <li className='list-info'>{listing.StandardFields.SubdivisionName}</li>
        </ul>
      </div>
    )
  }
}

export default ListingDetail;