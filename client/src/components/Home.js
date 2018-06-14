import React, { Component } from 'react';
import axios from 'axios';
import ListingSummary from './ListingSummary.js';

//Images
import agentphoto from '../img/agent-photo-crop.jpg';

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
    const display = this.state.featuredListings.map((listing, index) => {
      return (<ListingSummary key={index} listing={listing} />)
    })

    return (
      <div>
        <div className='background-image'></div>
          <header className='home'>
            <h1>Your Real Estate Resource</h1>
            <p>Experienced Realtors Helping you Buy, Sell and Invest in <br /> Boca Raton, Delray Beach and Highland Beach</p>
          </header>
          <section className='home'>
            <h2>Sharon Arnett & Caron McGinley</h2>
            <p className='agent-bio'>Whether you are looking at buying, selling or making a difficult decision when facing a financial crisis with a piece of real estate, we can help.<br />
            <br />
            We have advised our clients over the years with all stages of decision-making in the acquisition and disposition of their real estate assets. There's no substitute for experience and we are experts in problem solving in this challenging market.<br /> 
            <br />
            The majority of our business is repeat and referral - references are no problem - just ask!</p>
            <img src={agentphoto} alt='Agent Photo' className='agent-photo' />
          </section>
          <section className='home'>
            <h1>Featured Listings</h1>
            {display}
          </section>
      </div>
    );
  }
}

export default Home;
