import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";



const Header = () => (
  <div className="Header">
    <AppBar position="static">
          <Toolbar className="app-header">
          Header Component
          </Toolbar>
        
      </AppBar>
    
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
