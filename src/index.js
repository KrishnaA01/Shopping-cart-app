import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './context/Context';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
      <App />
    </Context>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
