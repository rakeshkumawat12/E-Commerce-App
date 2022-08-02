import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Product from './pages/product/Product';
import ProductList from './pages/productlist/ProductList';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/cart' element={<Cart />} exact />
          <Route path='/login' element={<Login />} exact />
          <Route path='/register' element={<Register />} exact />
          <Route path='/product' element={<Product />} exact />
          <Route path='/productlist' element={<ProductList />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
