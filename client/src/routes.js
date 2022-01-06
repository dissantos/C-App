import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import MainNews from "./components/MainNews/MainNews";
import SignUp from './components/SignUp/SignUp'
import SuasAtividades from "./components/SuasAtividades/SuasAtividades";
import Profile from "./components/Profile/Profile";
import Search from './components/Search/Search';

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true}  element={<MainNews/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/news" element={<News category="Graduação" title="Edital seleciona alunos especiais para Mestrado em Automação e Sistemas" url="https://www.cefetmg.br/noticias/edital-seleciona-alunos-especiais-para-mestrado-"/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/forum" element={<h1>Em construção</h1>}/>
        <Route path="/activity" element={<SuasAtividades/>}/>
        <Route path="/profile" element={<Profile user={null}/>}/>
        <Route path="/profile/:user" element={<Profile/>}/>
        <Route path="/principal" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;