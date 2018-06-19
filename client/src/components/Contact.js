import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer.js';
// import ContactForm from './ContactForm.js';

class Contact extends Component {
  render(){
    return (
      <div className='contact'>
        <h1>Contact Us</h1>
        <section className='contact-details'>
          <h2>The Sharon & Caron Group</h2>
          <p>Keller Williams Realty Services<br />
            2424 N Federal Hwy, Suite 150<br />
            Boca Raton, FL 3343</p>
          <p>
            <i className='fas fa-phone'></i>
            561.699.6117
          </p>
          <p>
            <i className='far fa-envelope'></i>
            info@sharoncaron.com
          </p>
        </section>
        <MapContainer google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCblFukI6795s5YfGTqYXLXNQBpjiKpmcs'
})(Contact)
