import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import { App } from './app';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/fanthropy'>
    <App />
  </BrowserRouter>
);
