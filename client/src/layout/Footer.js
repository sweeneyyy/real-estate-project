import React from 'react';

// import LuxLogo from '../img/KW_Lux_Logo.png';

function Footer () {
  return(
    <div className="footer">
      {/* <img src={LuxLogo} alt='KW Luxury' /> */}
      <span className="footer-text">The Sharon & Caron Group &copy; {new Date().getFullYear()}</span>
    </div>
  );
}

export default Footer;
