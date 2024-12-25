import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Applications from './pages/Applications.tsx'
import Biography from './pages/Biography.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Biography />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="*" element={<Biography />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
