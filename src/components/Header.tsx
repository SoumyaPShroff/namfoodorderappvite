import React from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import '../App.css'; // Importing CSS for header

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/" className='link-label'>Home</Link></li>
          <li><Link to="/Aboutus" className='link-label'>About Us</Link></li>
          <li><Link to="/contact" className='link-label'>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
