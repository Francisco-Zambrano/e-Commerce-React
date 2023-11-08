import './styles.css'
import Cart from './assets/Cart.svg'

const CartWidget = () => {
  return (
    <div className="btn">
      <button className="btn">
        <img className="cart-logo" src={Cart} alt="cart"/>
        <p className='count-cart'>1</p>
      </button>
    </div>
  )
}

export default CartWidget