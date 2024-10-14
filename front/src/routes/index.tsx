// import { BrowserRouter, Routes, Route, redirect, Router } from 'react-router-dom';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Agendamentos } from '../pages/Agendamentos';
import { Quadras } from '../pages/Quadras';
import { Login } from '../pages/Login';

// import { Home, NotFound } from '../pages/';

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/agendamentos" element={<Agendamentos/>}/>
        <Route path="/quadras" element={<Quadras/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};