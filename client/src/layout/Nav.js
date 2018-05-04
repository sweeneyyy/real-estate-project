import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (
        <span>
          <NavLink activeClassName='active' to="/profile">
            Profile
          </NavLink>
          <Logout updateUser={this.props.updateUser} />
        </span>);
    }
    else {
      links = (
        <span>
          <NavLink activeClassName='active' to="/login">
            Login
          </NavLink>
          <NavLink activeClassName='active' to="/signup">
            Sign Up
          </NavLink>
        </span>);
    }

    return(
        <div>
          <nav className="nav">
            <a href="/">Home</a>
            {links}
          </nav>
        </div>
      );
  }
}

export default Nav;
