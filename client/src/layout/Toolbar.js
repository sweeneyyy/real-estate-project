import React from 'react';

function Toolbar() {
  return (
    <ul className='toolbar'>
      <li className='toolbar-contact'>
        <a href='tel:561-302-3187'>
          <i className='fas fa-phone'></i>
          561.302.3187
        </a>
      </li>
      <li className='toolbar-contact'>
        <a href='mailto:info@sharoncaron.com' target='_blank'>
          <i className='far fa-envelope'></i>
          info@sharoncaron.com
        </a>
      </li>
      <li className='toolbar-social'>
        <a href='https://www.facebook.com/sharoncaronKW' target='_blank'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='http://instagram.com/sharoncarongroup' target='_blank'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='https://twitter.com/sharonarn' target='_blank'>
          <i className='fab fa-twitter'></i>
        </a>
      </li>
    </ul>
  );
}

export default Toolbar;