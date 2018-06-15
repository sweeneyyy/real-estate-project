import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
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
      <li>
        <NavLink activeClassName='active' to='/search'>
          Property Search
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/neighborhoods'>
          Neighborhoods
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/contact'>
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
