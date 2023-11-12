import { useState } from 'react';
import './styles.css'

const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const add = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const subtract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
  return (
    <div className='counter'>
        <button className='action-button' onClick={subtract}>-</button>
        <h2 className='quantity'>{quantity}</h2>
        <button className='action-button' onClick={add}>+</button>
        <div>
            <button className='add-to-cart' onClick = {() => onAdd(quantity)}>Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount