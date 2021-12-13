import React from "react";
import "./Header.css";
import AppBar from "@material-ui/core/AppBar";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import ReactLogo from "../../images/account_circle_black_24dp.svg";
const Header = () => (
  <div className="Header">
    <AppBar position="static">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse id="navbar-nav" className="app-header">
            <Nav className="menu">
              <Navbar.Brand href="#c-app" className="logo">
                C-app
              </Navbar.Brand>
              <Nav.Link className="menu-item" href="#home">
                HOME
              </Nav.Link>
              <Nav.Link className="menu-item" href="#atividades">
                ATIVIDADES
              </Nav.Link>
              <Nav.Link className="menu-item" href="#noticias">
                NOTÍCIAS
              </Nav.Link>
              <Nav.Link className="menu-item" href="#forum">
                FÓRUM
              </Nav.Link>
            </Nav>

            <Nav >
              Seu nome
              <IconButton aria-label="Delete" className="menu-item">
                <SvgIcon className="icon-img">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </SvgIcon>
              </IconButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </AppBar>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
