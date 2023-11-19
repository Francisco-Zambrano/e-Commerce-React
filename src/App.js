import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import { useState } from 'react';
import Cart from './pages/Cart/Cart';

function App() {

  const quantityOnCart = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0);
  }

  const [cart, setCart] = useState([]);

  return (
    
    <div>
      <CartContext.Provider value={{cart, setCart, quantityOnCart}}>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/products/:category" element={<ItemListContainer />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>

        </BrowserRouter>
      </CartContext.Provider>
    </div>
      
  );
}

export default App;
