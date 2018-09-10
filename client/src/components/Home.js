import React, { Component } from 'react';
// Listing Sliders
import FeaturedSlider from './FeaturedSlider.js';
import PendingSlider from './PendingSlider.js';
import SoldSlider from './SoldSlider.js';
//Images
import agentphoto from '../img/agent-photo-crop.jpg';

class Home extends Component {
  render(){
    const { selectListing } = this.props;
    return (
      <div>
        <header className='home'>
          <h1>Your Real Estate Resource</h1>
          <p>Experienced Realtors Helping you Buy, Sell and Invest in <br /> Boca Raton, Delray Beach and Highland Beach</p>
        </header>
        <section className='home agent-detail'>
          <h2>Sharon Arnett & Caron McGinley</h2>
          <p className='agent-bio'>Whether you are looking at buying, selling or making a difficult decision when facing a financial crisis with a piece of real estate, we can help.<br />
          <br />
          We have advised our clients over the years with all stages of decision-making in the acquisition and disposition of their real estate assets. There's no substitute for experience and we are experts in problem solving in this challenging market.<br />
          <br />
          The majority of our business is repeat and referral - references are no problem - just ask!</p>
          <img src={agentphoto} alt='Agent' className='agent-photo' />
        </section>
        <section className='home'>
          <h1>Featured Listings</h1>
            <FeaturedSlider settings={this.props.settings} selectListing={selectListing} />
        </section>
        {/* <section className='home'>
          <h1>Under Contract</h1>
            <PendingSlider settings={this.props.settings} />
        </section> */}
        <section className='home'>
          <h1>Sold</h1>
            <SoldSlider settings={this.props.settings} selectListing={selectListing} />
        </section>
      </div>
    );
  }
}

export default Home;
