import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav-wrapper'>
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/buy'>
          Buy
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/sell'>
          Sell
        </NavLink>
      </li>
      {/* <li>
        <NavLink activeClassName='active' to='/rent'>
          Rent
        </NavLink>
      </li> */}
      {/* <li>
        <NavLink activeClassName='active' to='/neighborhoods'>
          Neighborhoods
        </NavLink>
      </li> */}
      <li>
        <NavLink activeClassName='active' to='/reviews'>
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/contact'>
          Contact
        </NavLink>
      </li>
    </ul>
    </div>
  );
}

export default Nav;
