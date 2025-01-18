import { Routes, Route } from 'react-router';
import LoginForm from './components/LoginForm';
import TeamsPage from './pages/TeamsPage/TeamsPage';
import OrgsPage from './pages/OrgsPage/OrgsPage';
import ThreeSquare from './pages/Organizations/ThreeSquare/ThreeSquare';
import SlotPage from './components/SlotPage';
import PageLayout from './components/PageLayout';

export const App = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<LoginForm />} />
        <Route path='/' element={<LoginForm />} />
        <Route path='/teams' element={<TeamsPage />} />
        <Route path='/orgs' element={<OrgsPage />} />
        <Route path='/orgs/threesquare' element={<ThreeSquare />} />
        <Route path='/orgs/slotpage' element={<SlotPage />} />
      </Route>
    </Routes>
  );
};

export default App;
