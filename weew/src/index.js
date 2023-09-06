import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<App/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );


reportWebVitals();
