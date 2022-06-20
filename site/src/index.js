
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './page/home/'
import Login from './page/login'
import Menu from './page/menu'
import Menu2 from './page/menu2'
import Menu3 from './page/menu3'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<App/>} />
          <Route path='/home'element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/menu2' element={<Menu2 />} />
          <Route path='/menu3' element={<Menu3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
