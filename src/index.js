import React from 'react';
import ReactDOM from 'react-dom/client';
import NavRoutes from './routes';
import './css/index.css';
import './css/showcase.css';
import './css/coverpage.css';
import './css/displaybooks.css';
import './css/login.css';
import './css/library.css';
import './css/category.css';
import './assets/fonts/cairo.css'
import './fontawesome/css/all.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavRoutes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
