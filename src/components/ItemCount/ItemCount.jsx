import './styles.css'
import { Link } from 'react-router-dom'

const ItemCount = ({quantity, add, subtract, addToCart}) => {

  return (
    <div className='counter'>
        <button className='action-button' onClick={subtract}>-</button>
        <h2 className='quantity'>{quantity}</h2>
        <button className='action-button' onClick={add}>+</button>
        <div>
          <button className='add-to-cart' onClick={addToCart}>Add to Cart</button>
            
        </div>
        <div>
        <Link to="/Cart">
          <button className='action-button' >Buy Now</button>
          </Link>
        </div>
    </div>
  )
}

export default ItemCount