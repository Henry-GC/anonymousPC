import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './components/Context/CartContext';
import { FavoriteProvider } from './components/Context/FavoriteContext';
import Inicio from './components/Routes/Inicio';
import Productos from './components/Routes/Productos';
import Ensambles from './components/Routes/Ensambles';
import Nosotros from './components/Routes/Nosotros';
import Usuario from './components/Routes/Usuario'
import Login from './components/Routes/Login';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <BrowserRouter>
      <ChakraProvider disableGlobalStyle={true}>
        <FavoriteProvider>
          <CartProvider>
            <div className='container'>
            <Header/>
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/productos' element={<Productos />} />
              <Route path='/productos/procesador' element={<Productos />} />
              <Route path='/productos/tarjeta-grafica' element={<Productos />} />
              <Route path='/productos/placa-madre' element={<Productos />} />
              <Route path='/productos/memoria-ram' element={<Productos />} />
              <Route path='/productos/almacenamiento' element={<Productos />} />
              <Route path='/productos/fuente-de-poder' element={<Productos />} />
              <Route path='/productos/carcasa' element={<Productos />} />
              <Route path='/productos/accesorios' element={<Productos />} />
              <Route path='/ensambles' element={<Ensambles />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/usuario/*' element={
                <ProtectedRoute>
                  <Usuario/>
                </ProtectedRoute>
              }/>
              <Route path='/login/*' element={<Login/>}/>
            </Routes>
            </div>
          </CartProvider>
        </FavoriteProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;