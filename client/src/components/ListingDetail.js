import React, { Component } from 'react';
import axios from 'axios';

class ListingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingToDisplay: {}
    }
  }

  componentDidMount() {
    axios.get('/listings/search/' + this.props.listing)
    .then((res) => {
      this.setState({ listingToDisplay: res.data.D.Results })
      console.log('listing to display', res.data.D.Results)
    })
  }
  
  render() {
    const listing = this.state;

    return (
      <div>
        <h2>Listing Detail Page</h2>
        {/* <img 
          className='listing-primary-photo-detail'
          src={listing.StandardFields.Photos[0].Uri800}
          alt={'Photo for' + listing.StandardFields.listingId}
        /> */}
        <h4>{listing.CurrentPrice}</h4>
      </div>
    )
  }
}

export default ListingDetail;