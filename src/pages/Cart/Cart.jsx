import './styles.css'
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import TrashCan from "./assets/TrashCan.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalToPay, clear, removeItem } = useContext(CartContext);

  const handleClear = () => {
    clear();
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="item-on-cart">
            <h1 >Cart is empty</h1>
            <Link to="/"><button className="clear-btn"> Back </button></Link>
        </div>
        
      ) : (
        <>
          {cart.map((item) => (
            <div className="item-on-cart" key={item.id}>
              <div>
                <img className="img-on-cart" src={item.image} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <div>
                <img className="trash-can" src={TrashCan} onClick={() => removeItem(item.id)} />
              </div>
            </div>
          ))}
          <div className="total-to-pay">
            <h2>Total: ${totalToPay()}</h2>
            <button className="clear-btn" onClick={handleClear} disabled={cart.length === 0}>
              Clear
            </button>
            <Link to="/Checkout">
              <button className="buy-btn" disabled={cart.length === 0}>
                Buy
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;