//import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.jpg';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/me2.jpg';

const Navbar = ({ setSidebar }) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img 
          className='menu-icon' 
          onClick={() => setSidebar(prev => !prev)} 
          src={menu_icon} 
          alt="Menu Icon" 
        />
        <img className='logo' src={logo} alt="Logo" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="Search Icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload Icon" />
        <img src={more_icon} alt="More Icon" />
        <img src={notification_icon} alt="Notification Icon" />
        <img src={profile_icon} className='user-icon' alt="Profile Icon" />
      </div>
    </nav>
  );
};

// Add prop validation using PropTypes
Navbar.propTypes = {
  setSidebar: PropTypes.func.isRequired, // Validate setSidebar as a required function
};

export default Navbar;
