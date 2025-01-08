import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/LoginPage/LoginPage';
import TeamsPage from './pages/TeamsPage/TeamsPage';
import OrgsPage from './pages/OrgsPage/OrgsPage';
import ThreeSquare from './pages/Organizations/ThreeSquare/ThreeSquare';
import SlotPage from './components/SlotPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path='/' element={<LoginPage />} />
      <Route path='/teams' element={<TeamsPage />} />
      <Route path='/orgs' element={<OrgsPage />} />
        <Route path='/orgs/threesquare' element={<ThreeSquare />} />
        <Route path='/orgs/slotpage' element={<SlotPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
