import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import ThankYouPage from './ThankYouPage'; // Importar a página de agradecimento

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thank-you" element={<ThankYouPage />} /> {/* Rota para a página de agradecimento */}
      </Routes>
    </Router>
  </React.StrictMode>
);
