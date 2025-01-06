import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/LoginPage/LoginPage';
import TeamsPage from './pages/TeamsPage/TeamsPage';
import OrgsPage from './pages/OrgsPage/OrgsPage';
import ThreeSquare from './pages/Organizations/ThreeSquare/ThreeSquare';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename='/fanthropy'>
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path='/teams' element={<TeamsPage />} />
      <Route path='/orgs' element={<OrgsPage />} />
      <Route path='/orgs/threesquare' element={<ThreeSquare/>} />
    </Routes>
    </Router>
  </StrictMode>
);
