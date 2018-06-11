import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function FeaturedListingDisplay (props) {
  return (
    <ul className='featured-list'>
      {props.featuredListings.map(function (listing) {
        return (
          <li key={listing.StandardFields.ListingId} className='listing-summary'>
            <ul className='space-list-summary'>
              <li>
                <img
                  className='listing-primary-photo'
                  src='https://placeimg.com/250/250/arch/grayscale'
                  alt='Primary listing photo'
                />
              </li>
              <li className='list-price'>${listing.StandardFields.CurrentPrice}</li>
              <li>{listing.StandardFields.BedsTotal} Beds | {listing.StandardFields.BathsTotal} Baths | {listing.StandardFields.BuildingAreaTotal} SQFT</li>
              <li>{listing.StandardFields.UnparsedFirstLineAddress}</li>
              <li>{listing.StandardFields.City}, {listing.StandardFields.StateOrProvince} {listing.StandardFields.PostalCode}</li>
              <li>{listing.StandardFields.SubdivisionName} Subdivision</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

FeaturedListingDisplay.propTypes = {
  featuredListings: PropTypes.array.isRequired
}

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      featuredListings: []
    }
  }
  // pull in agent featured listings on page load
  componentDidMount() {
    axios.get('/listings/search', {

    }).then((res) => {
      this.setState({featuredListings: res.data.D.Results});
      console.log('listings', res.data.D.Results);
    }).catch((err) => {
      console.log('error:', err);
    });
  }

  render(){
    return (
      <div>
        <h1>HOME</h1>
        <FeaturedListingDisplay featuredListings={this.state.featuredListings} />
      </div>
    );
  }
}

export default Home;
