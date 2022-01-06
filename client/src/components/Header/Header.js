import React from "react";
import "./Header.css";
import AppBar from "@material-ui/core/AppBar";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom"

function Header() {
  return (
    <div >
      <AppBar position="static">
        <Navbar className="Header" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Collapse id="navbar-nav" className="app-header">
              <Nav className="menu">
                <Navbar.Brand href="#c-app" className="logo">
                  C-app
                </Navbar.Brand>
                <Nav.Link className="menu-item" href="/">
                  HOME
                </Nav.Link>
                <Nav.Link className="menu-item" href="/login">
                  ATIVIDADES
                </Nav.Link>
                <Nav.Link className="menu-item" href="/news">
                  NOTÍCIAS
                </Nav.Link>
                <Nav.Link className="menu-item" href="#forum">
                  FÓRUM
                </Nav.Link>
                <Nav.Link className="menu-item" href="#buscar">
                  BUSCAR
                </Nav.Link>
              </Nav>

              <Nav className="menu-user">
                <span className="name">Seu Nome</span>
                <IconButton href="#profile">
                  <SvgIcon className="material-icons">
                    <MdAccountCircle />
                  </SvgIcon>
                </IconButton>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
