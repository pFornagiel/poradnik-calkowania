// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
// Util
import ScrollToTop from 'util/ScrollToTop';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>
  // </StrictMode>,
)
