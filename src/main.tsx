import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Applications from './pages/Applications.tsx'
import Biography from './pages/Biography.tsx'
import Techstack from './pages/Techstack.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Biography />} />
            <Route path="/techStack" element={<Techstack />} />
            <Route path="/applications" element={<Applications />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
