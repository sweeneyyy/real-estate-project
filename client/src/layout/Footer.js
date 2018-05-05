import React, { Component } from 'react';

function Footer () {
  return(
    <div className="footer">
        <span className="footer-text">&copy; {new Date().getFullYear()}</span>
    </div>
  );
}

export default Footer;
