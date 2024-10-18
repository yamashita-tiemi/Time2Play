// import { BrowserRouter, Routes, Route, redirect, Router } from 'react-router-dom';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Agendamentos } from '../pages/Agendamentos';
import { Quadras } from '../pages/Quadras';
import { Quadra } from '../pages/Quadra';
import { Login } from '../pages/Login';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/agendamentos" element={<Agendamentos/>}/>
        <Route path="/:id" element={<Quadras/>}/>
        <Route path="/:id/:id" element={<Quadra/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};