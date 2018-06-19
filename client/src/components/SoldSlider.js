import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import ListingSummary from './ListingSummary.js';

class SoldSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soldSlides: []
    }
  }
  componentDidMount() {
    // sold listings
    axios.get('/listings/search/sold', {

    }).then((res) => {
      this.setState({soldSlides: res.data.D.Results});
    }).catch(err => console.log('error', err));
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
    
    const soldSlidesToDisplay = this.state.soldSlides.map((listing, index) => {
      return (<ListingSummary key={index} listing={listing} />)
    });

    return (
      <Slider {...settings}>
        {soldSlidesToDisplay}
      </Slider>
    );
  }
}

export default SoldSlider;