// import React from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
// import Home from './pages/Home';
// import Error from './pages/Error';
// import Journal from './pages/Journal'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
