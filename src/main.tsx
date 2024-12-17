import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import LoginPage from './pages/LoginPage/LoginPage';
import TeamsPage from './pages/TeamsPage/TeamsPage';
import reactlogo from './assets/react.svg';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path='/teams' element={<TeamsPage />} 
      />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
