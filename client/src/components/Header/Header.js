import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Row from "react-bootstrap/Row";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

const Header = () => (
  <div className="Header">
    <AppBar position="static">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse id="navbar-nav" className="app-header">
            <Nav className="menu">
              <Navbar.Brand href="#c-app">C-app</Navbar.Brand>
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

            <Nav className="menu">
              <NavDropdown title="Nome do User" className="menu-user">
                <NavDropdown.Item className="drop-item" href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item className="drop-item"href="#action/3.2">
                  Alterar Senha
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="drop-item" href="#action/3.3">Sair</NavDropdown.Item>
              </NavDropdown>
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
