import React from 'react';

function Toolbar() {
  return (
    <ul className='toolbar'>
      <li className='toolbar-contact'>
        <i className='fas fa-phone'></i>
        <a href='tel:561-302-3187'>561.302.3187</a>
      </li>
      <li className='toolbar-contact'>
        <i className='far fa-envelope'></i>
        <a href='mailto:info@sharoncaron.com'>info@sharoncaron.com</a>
      </li>
      <li className='toolbar-social'>
        <i className='fab fa-facebook-f'></i>
          <a href='https://www.facebook.com/sharoncaronKW'></a>
        <i className='fab fa-instagram'></i>
          <a href='http://instagram.com/sharoncarongroup'></a>
        <i className='fab fa-twitter'></i>
          <a href='https://twitter.com/sharonarn'></a>
      </li>
    </ul>
  );
}

export default Toolbar;