import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import Menu from './components/menu.tsx'
import 'primereact/resources/themes/saga-blue/theme.css'; // ou outro tema
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Menu />
    <App />
  </StrictMode>
)
