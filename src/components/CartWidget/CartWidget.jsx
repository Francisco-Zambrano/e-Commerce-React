import './styles.css'
import Cart from './assets/Cart.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

  const {quantityOnCart} = useContext(CartContext);

  return (
    
      <div className="btn">
        <button className="btn">
        <Link to="/Cart"><img className="cart-logo" src={Cart} alt="cart"/></Link>
          <p className='count-cart'>{quantityOnCart()}</p>
        </button>
      </div>
    
  )
}

export default CartWidget