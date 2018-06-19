import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className='flex-form'>
        <div className='contact-CTA'>
          <h2>We'd Love to Hear From You!</h2>
          <p>Questions about property taxes or insurance? Trying to decide if it is a good time to refinance? We are always happy to be a resource with any questions you have.</p>
        </div>
          <form action="https://formspree.io/sweeneyarnett@gmail.com" method="POST" className='contact-form'>
            <h1>Send Us A <strong>Note</strong></h1>
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
              <label for='message'>
                <p>Message</p>
              </label>
                <textarea name='message' rows='10' cols='60'></textarea>
            <input type='submit' value='Submit' className='btn-primary' />
          </form>
        </div>
    )
  }
}
export default ContactForm;