import React, { Component } from 'react';

function Footer () {
  return(
    <div className="footer">
        <span className="footer-text">&copy; Sweeney Arnett {new Date().getFullYear()}</span>
    </div>
  );
}

export default Footer;
