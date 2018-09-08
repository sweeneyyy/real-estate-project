import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import ListingSummary from './ListingSummary.js';

class FeaturedSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredSlides: []
    }
  }
  componentDidMount() {
    // pull in agent featured listings on page load
    axios.get('/listings/search')
    .then(res => {
      this.setState({featuredSlides: res.data.D.Results});
      console.log('listings', res.data.D.Results)
    }).catch(err => console.log('error:', err));
  }

  render() {
    // Slider display settings
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
    }
    const { selectListing } = this.props;
    // TO DO change key - shouldn't be index! use MLS num
    // or something more specific
    const featuredSlidesToDisplay = this.state.featuredSlides.map((listing, index) => {
      return (
        <Link to={`/listing-detail/${index}`} onClick={() => selectListing(listing)}>
          <ListingSummary key={index} listing={listing} />
        </Link>
      )
    });

    return (
      <Slider {...settings}>
        {featuredSlidesToDisplay}
      </Slider>
    );
  }
}

export default FeaturedSlider;