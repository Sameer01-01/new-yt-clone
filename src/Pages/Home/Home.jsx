//import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed/>
      </div>
    </>
  );
};

// Add prop validation using PropTypes
Home.propTypes = {
  sidebar: PropTypes.bool.isRequired, // Ensure sidebar is a boolean and required
};

export default Home;
