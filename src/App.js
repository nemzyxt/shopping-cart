import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CartProvider from './CartContext'

import Store from './pages/Store';
import Cancel from './pages/Cancel';
import Success from './pages/Success';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar';

function App() {
  return (
    <CartProvider>
      <Container>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route index element={ <Store /> } />
            <Route path="success" element={ <Success /> } />
            <Route path="cancel" element={ <Cancel /> } />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
