import React from "react";
import "./Footer.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./Footer.css";

const Footer = () => (
  <div className="Footer">
    <AppBar position="static">
      <Toolbar className="app-footer">
        Produzido por Surto Coletivo na base do rivotril
      </Toolbar>
    </AppBar>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
