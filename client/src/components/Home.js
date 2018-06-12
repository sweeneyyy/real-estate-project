import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ListingSummary from './components/ListingSummary.js';


// function FeaturedListingDisplay (props) {
//   return (
//     <ul className='featured-list'>
//       {props.featuredListings.map(function (listing) {
//         return (
//           <li key={listing.StandardFields.ListingId} className='listing-summary'>
//             <ul>
//               <li>
//                 <img
//                   className='listing-primary-photo'
//                   src={listing.StandardFields.Photos[0].Uri300}
//                   alt={'Primary photo for' + listing.StandardFields.ListingId}
//                 />
//               </li>
//             </ul>
//             <ul className='space-list-summary'>
//               <li className='list-price'>${listing.StandardFields.CurrentPrice}</li>
//               <li className='list-info'>{listing.StandardFields.BedsTotal} Beds | {listing.StandardFields.BathsTotal} Baths | {listing.StandardFields.BuildingAreaTotal} SQFT</li>
//               <li className='list-address'>{listing.StandardFields.UnparsedFirstLineAddress}</li>
//               <li className='list-address'>{listing.StandardFields.City}, {listing.StandardFields.StateOrProvince} {listing.StandardFields.PostalCode}</li>
//               <li className='list-info'>{listing.StandardFields.SubdivisionName} Subdivision</li>
//             </ul>
//           </li>
//         )
//       })}
//     </ul>
//   )
// }

// FeaturedListingDisplay.propTypes = {
//   featuredListings: PropTypes.array.isRequired
// }

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
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccckjccchccccccckclcjchcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    return (
      <div>
        <h1>Featured Listings</h1>
        <ListingSummary featuredListings={this.state.featuredListings} />
      </div>
    );
  }
}

export default Home;
