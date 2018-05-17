import React, { Component } from 'react';

class BuyerForm extends Component {
  render() {
    return (
    <div className='flex-form'>
      <div className='buy-CTA'>
        <h2>Ready to Start Your Home Search?</h2>
        <p>Our experienced and knowledgeable team is ready to help. The first step is to complete your buyer profile!</p>
      </div>
      <form action="https://formspree.io/sweeneyarnett@gmail.com" method="POST" className='buyer-form'>
        <h1 className='buyer-profile'>Complete Your <strong>Buyer Profile</strong></h1>
          <label for='name'>
            <p>Name</p>
            <input type='text' name='name' required />            
          </label>
          <label for='email'>
            <p>Email</p>
            <input type='email' name='_replyto' />
          </label>
          <label for='phone'>
            <p>Phone</p>
            <input type='tel' name='phone' />
          </label>
          <label for='propertyType'>
            <p>Property Type</p>
            <select name='propertyType'>
              <option value='' selected disabled hidden>Choose</option>
              <option value='Open to Options'>Open to Options</option>
              <option value='Single Family Home'>Single Family Home</option>
              <option value='Condo/Co-op'>Condo/ Co-op</option>
              <option value='Townhouse'>Townhouse</option>
            </select>
          </label>
          <label for='bedrooms'>
            <p>Bedrooms</p>
            <select name='bedrooms'>
              <option value='' selected disabled hidden>Choose</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5+'>5+</option>
            </select>
          </label>
          <label for='bathrooms'>
            <p>Bathrooms</p>
            <select name='bathrooms'>
              <option value='' selected disabled hidden>Choose</option>
              <option value='1'>1</option>
              <option value='1.5'>1.5</option>
              <option value='2'>2</option>
              <option value='2.5'>2.5</option>
              <option value='3+'>3+</option>
            </select>
          </label>
          <label for='priceRange'>
            <p>Price Range</p>
            <select name='priceRange'>
              <option value='' selected disabled hidden>Choose</option>
              <option value='Under $200,000'>Under $200,000</option>
              <option value='$200,000 to $250,000'>$200,000 to $250,000</option>
              <option value='$250,000 to $300,000'>$250,000 to $300,000</option>
              <option value='$300,000 to $350,000'>$300,000 to $350,000</option>
              <option value='$350,000 to $400,000'>$350,000 to $400,000</option>
              <option value='$400,000 to $450,000'>$400,000 to $450,000</option>
              <option value='$450,000 to $500,000'>$450,000 to $500,000</option>
              <option value='$500,000 to $600,000'>$500,000 to $600,000</option>
              <option value='$600,000 to $700,000'>$600,000 to $700,000</option>
              <option value='$700,000 to $800,000'>$700,000 to $800,000</option>
              <option value='$800,000 to $900,000'>$800,000 to $900,000</option>
              <option value='$900,000 to $1,000,000'>$900,000 to $1,000,000</option>
              <option value='$1,000,000+'>$1,000,000+</option>
            </select>
          </label>
          <label for='desiredDetails'>
            <p>Desired neighborhoods and locations. Any special features like pool or outdoor space?</p>
          </label>
            <textarea name='desiredDetails' rows='10' cols='60'></textarea>
        <input type='submit' value='Submit' />
      </form>
    </div>
    )
  }
}

export default BuyerForm;