import React, { Component } from 'react';

function Footer () {
  return(
    <div className="footer">
        <span className="footer-text">The Sharon & Caron Group &copy; {new Date().getFullYear()}</span>
    </div>
  );
}

export default Footer;
