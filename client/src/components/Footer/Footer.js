
import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import "./Footer.css";

const Footer = () => (
  <div className="Footer">
    <AppBar position="static">
          <Toolbar className="app-footer">
            <bold>Produzido por Surto Coletivo na base do rivotril</bold>
          </Toolbar>
        </AppBar>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;