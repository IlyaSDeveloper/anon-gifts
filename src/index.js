import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import './index.css';
import SingInUp from './SingInUp';
import Catalog from './pages/catalog/Catalog.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Suspense fallback={<Loader />}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='' index />
        <Route path='user' element={<SingInUp />}>
          <Route path='' />
        </Route>
      </Route>
      <Route path='catalog' element={<Catalog/>}/>
    </Routes>
  </BrowserRouter>
  // </Suspense>
);