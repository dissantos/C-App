import React from "react";
import "./Footer.css";
import AppBar from "@material-ui/core/AppBar";
import "./Footer.css";

const Footer = () => (
  <AppBar position="static" className="app-footer">
    <p className="footer">
      C-App | © Produzido por Surto Coletivo com auxílio de benzodiazepinas
    </p>
  </AppBar>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
