import React, { Component } from 'react';

class SellerForm extends Component {
  render() {
    return (
      <div className='flex-form'>
        <div className='sell-CTA'>
          <h2>Interested In Listing Your Home With Us?</h2>
          <p>Timing and preparation are everything when it comes to selling your home. It’s not uncommon for clients to contact us months before they’re ready to actually list. Whether you’re currently living there, have tenants, or the property is vacant, we would love the opportunity to chat more about working together!</p>
        </div>
        <form action="https://formspree.io/sweeneyarnett@gmail.com" method="POST" className='seller-form'>
          <h1 className='seller-profile'>Complete Your <strong>Home Profile</strong></h1>
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
            <label for='address'>
              <p>Address</p>
              <input type='text' name='address' />
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
            <label for='timeToSell'>
              <p>Timeframe to Sell</p>
              <select name='timeToSell'>
                <option value='' selected disabled hidden>Choose</option>
                <option value='Immediately'>Immediately</option>
                <option value='1 - 3 months'>1 - 3 months</option>
                <option value='3 - 5 months'>3 - 5 months</option>
                <option value='6+ months'>6+ months</option>
              </select>
            </label>
            <label for='leadSource'>
              <p>How Did You Find Us?</p>
              <select name='leadSource'>
                <option value='' selected disabled hidden>Choose</option>
                <option value='Google'>Google</option>
                <option value='Other Search Engine'>Other Search Engine</option>
                <option value='Family / Friend Recommendation'>Family / Friend Recommendation</option>
                <option value='Social Media'>Social Media</option>
                <option value='Another Website'>Another Website</option>
              </select>
            </label>
            <label for='homeDetails'>
              <p>Any special features, updates since you purchased or comments?</p>
            </label>
              <textarea name='homeDetails' rows='10' cols='60'></textarea>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SellerForm;