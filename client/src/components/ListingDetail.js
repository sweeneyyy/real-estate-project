import React, { Component } from 'react';

class ListingDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      singleListingToDisplay: {}
    }
  }

  
  
  render(){
    // const listing = props.listing.StandardFields;

    return (
      <div>
        <h2>Listing Detail Page</h2>
        <img 
          className='listing-primary-photo-detail'
          src={listing.StandardFields.Photos[0].Uri800}
          alt={'Photo for' + listing.StandardFields.listingId}
        />
      </div>
    )
  }
}

export default ListingDetail;