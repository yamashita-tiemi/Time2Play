// import { BrowserRouter, Routes, Route, redirect, Router } from 'react-router-dom';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Agendamentos } from '../pages/Agendamentos';

// import { Home, NotFound } from '../pages/';

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/agendamentos" element={<Agendamentos/>}/>
      </Routes>
    </BrowserRouter>
  );
};