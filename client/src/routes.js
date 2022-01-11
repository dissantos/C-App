import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import MainNews from "./components/MainNews/MainNews";
import SignUp from './components/SignUp/SignUp'
import Profile from "./components/Profile/Profile";
import Search from './components/Search/Search';
import Button from "@mui/material/Button";
import Forum from "./components/Forum/ForumPage";
import ActivitiesPage from "./components/Activities/ActivitiesPage"


const Router = () => {

  const accessDenied = (
    <>
      <h1>Sem permissão de acesso</h1>
      <h2>Realize o Login primeiro</h2>
    </>
  )

  const userLogged = (
    <div>
      <h1>Você já está logado</h1>
      <Button variant="outlined" onClick={() => window.location.href = "/principal"}>Voltar para página principal</Button>
    </div>
  )

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true}  element={<MainNews/>}/>
        <Route path="/login" element={localStorage.getItem('@C-app/login') ? userLogged : <Login/>}/>
        <Route path="/news" element={<News category="Graduação" title="Edital seleciona alunos especiais para Mestrado em Automação e Sistemas" url="https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-"/>}/>
        <Route path="/signup" element={localStorage.getItem('@C-app/login') ? userLogged : <SignUp/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/forum" element={<Forum/>}/>
        <Route path="/activity" element={localStorage.getItem('@C-app/login') ? <ActivitiesPage/> : accessDenied}/>
        <Route path="/profile" element={localStorage.getItem('@C-app/login') ? <Profile user={null}/> : accessDenied}/>
        <Route path="/profile/:user" element={<Profile/>}/>
        <Route path="/principal" element={localStorage.getItem('@C-app/login') ? <Home/> : accessDenied}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;