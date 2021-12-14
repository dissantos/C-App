import React from "react";
import "./Header.css";
import AppBar from "@material-ui/core/AppBar";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import IconButton from "@material-ui/core/IconButton";

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

            <Nav>
              Seu nome
              <IconButton aria-label="Delete" className="menu-item">
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
