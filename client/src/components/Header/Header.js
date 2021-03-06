import React from "react";
import "./Header.css";
import AppBar from "@material-ui/core/AppBar";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import { MdAccountCircle } from "react-icons/md";
import logo from "./C_App_logo_transparente.svg";

function Header() {
  return (
    <div >
      <AppBar position="static">
        <Navbar className="Header" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Collapse id="navbar-nav" className="app-header">
              <Nav className="menu">
                <Navbar.Brand href="/" className="logo" style={{backgroundImage: logo}}>
                  <img src={logo} width='30px'></img>
                </Navbar.Brand>
                {
                  window.localStorage.getItem('@C-app/login') &&
                  (<Nav.Link className="menu-item" href="/principal">
                    HOME
                    </Nav.Link>)
                }
                {
                  window.localStorage.getItem('@C-app/login') &&
                  (<Nav.Link className="menu-item" href="/activity">
                    ATIVIDADES
                    </Nav.Link>)
                }                
                <Nav.Link className="menu-item" href="/">
                  NOTÍCIAS
                </Nav.Link>
                <Nav.Link className="menu-item" href="/forum">
                  FÓRUM
                </Nav.Link>
                <Nav.Link className="menu-item" href="/search">
                  BUSCAR
                </Nav.Link>
              </Nav>

              <Nav className="menu-user">
                { // Exibe a opção de login ou o nome do usuário dependendo do estado da sessão
                  window.localStorage.getItem('@C-app/login') ?
                    (
                      <>
                        <span className="name">{JSON.parse(window.localStorage.getItem('@C-app/login')).nome}</span>
                        <IconButton href="/profile">
                          <SvgIcon className="material-icons">
                            <MdAccountCircle />
                          </SvgIcon>
                        </IconButton>
                      </>
                    )
                  :
                    (
                      <Nav.Link href="/login" className="menu-item menu-item-login">
                        LOGIN
                      </Nav.Link>
                    )
                }
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
