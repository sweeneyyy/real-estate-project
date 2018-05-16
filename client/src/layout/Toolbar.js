import React, { Component } from 'react';

function Toolbar() {
  return (
    <ul className='toolbar'>
      <li>
        <i className='fas fa-phone'></i>
        <a href='tel:561-302-3187'>561.302.3187</a>
      </li>
      <li>
        <i className='far fa-envelope'></i>
        <a href='mailto:info@sharoncaron.com'>info@sharoncaron.com</a>
      </li>
      <li>
        <i className='fab fa-facebook-f'></i>
      </li>
    </ul>
  )
}

export default Toolbar;