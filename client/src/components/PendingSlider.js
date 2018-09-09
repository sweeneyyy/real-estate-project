import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import ListingSummary from './ListingSummary.js';

class PendingSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingSlides: []
    }
  }
  componentDidMount() {
    // pending listings
    axios.get('/listings/search/pending')
    .then(res => {
      this.setState({pendingSlides: res.data.D.Results});
    }).catch(err => console.log('error', err));
  }

  render() {
    // Slider display settings
    const settings = {
      dots: false,
      infinite: false,
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

    const pendingSlidesToDisplay = this.state.pendingSlides.map((listing, index) => {
      return (<ListingSummary key={index} listing={listing} />)
    });

    return (
      <Slider {...settings}>
        {pendingSlidesToDisplay}
      </Slider>
    );
  }
}

export default PendingSlider;