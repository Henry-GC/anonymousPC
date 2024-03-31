import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Inicio from './components/Inicio';
import Productos from './components/Productos';
import Ensambles from './components/Ensambles';
import Nosotros from './components/Nosotros';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<Productos/>} />
        <Route path='/ensambles' element={<Ensambles />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;