import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './Styles.css'
import { CartContext } from '../../context/CartContext';

const ItemDetail = ( {item} ) => {

  const {cart, setCart} = useContext(CartContext)
  const [quantity, setQuantity] = useState(1);
  
    const add = () => {
        quantity < item.stock && setQuantity(quantity + 1);
    }

    const subtract = () => {
        quantity > 1 && setQuantity(quantity - 1);
    };

    const addToCart = () => {
      
      const addedProduct = {...item, quantity};
      const newCart = [...cart];
      const alreadyAdded = newCart.find((product) => product.id === addedProduct.id);
      
      if (alreadyAdded) {
        alreadyAdded.quantity = alreadyAdded.quantity + quantity;
      } else {
        newCart.push(addedProduct)
      }
      setCart(newCart);
      
    }

  return (
    <div className="card-detail" >
        <div className='img-container'>
            <img className='img-detail' src={item.image} alt={item.title}/>
        </div>
        <div>
            <h3 className='h3-details'>{item.title}</h3>
            <p className='p-details'>{item.description}</p>
            <h6 className='h6-details'>Price: ${item.price}</h6>
            <div>
              <ItemCount quantity={quantity} add={add} subtract={subtract} addToCart={addToCart}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail