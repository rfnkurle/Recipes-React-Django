
import './App.css'
import Nav from "./components/Nav.jsx";
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <>
     <h1 id="logono">Recipes Central</h1>
    
    <Nav />
    <Outlet />

  
    </>
  )
}

export default App
