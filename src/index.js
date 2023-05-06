import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Submit from './Submit';
import Done from './Done';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route  path='/submit' element={<Submit/>} />
    <Route  path='/done' element={<Done/>} />
  </Routes>
  </BrowserRouter>
);
