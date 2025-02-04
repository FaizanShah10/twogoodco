import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Shop from './pages/Shop.jsx';
import WholeSale from './pages/WholeSale.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wholesale-soaps" element={<WholeSale />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
