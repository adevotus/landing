import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
//import { Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import './assets/css/main.css'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)

