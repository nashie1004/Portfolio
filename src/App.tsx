import './App.css'
import Aside from './components/Aside'
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Biography from './pages/Biography';
import Techstack from './pages/Techstack';
import Applications from './pages/Applications';

function App() {

  return (
    <>
      <Aside />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
