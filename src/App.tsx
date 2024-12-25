import './App.css'
import Aside from './components/Aside'
import { Outlet } from "react-router";

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
