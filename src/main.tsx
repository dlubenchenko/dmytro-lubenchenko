import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './ui/styles/reset.module.scss'; // Modern Reset
import './assets/tailwind.css'; // Tailwind entry (створити файл, якщо ще немає)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
