import React, { Component } from 'react';
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
    axios.get('/listings/search', {

    }).then(res => {
      this.setState({featuredSlides: res.data.D.Results});
    }).catch(err => console.log('error:', err));
  }

  render() {
    // Slider display settings
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }

    const featuredSlidesToDisplay = this.state.featuredSlides.map((listing, index) => {
      return (<ListingSummary key={index} listing={listing} />)
    });

    return (
      <Slider {...settings}>
        {featuredSlidesToDisplay}
      </Slider>
    );
  }
}

export default FeaturedSlider;