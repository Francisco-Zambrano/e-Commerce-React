import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart/Cart';
import BuyOrder from './components/BuyOrder/BuyOrder';
import { getFirestore } from "firebase/firestore"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8O6Ac-n8oqTfv3ishcitLFCUh6s0TOig",
  authDomain: "proyecto-react-2-8303d.firebaseapp.com",
  projectId: "proyecto-react-2-8303d",
  storageBucket: "proyecto-react-2-8303d.appspot.com",
  messagingSenderId: "836301643289",
  appId: "1:836301643289:web:7749e06243b399ab7d9488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


function App() {

  return (
    
    <div>
      <CartProvider>
      
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/products/:category" element={<ItemListContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/BuyOrder" element={<BuyOrder />} />
          </Routes>

        </BrowserRouter>
      
      </CartProvider>
    </div>
      
  );

}

export default App;
