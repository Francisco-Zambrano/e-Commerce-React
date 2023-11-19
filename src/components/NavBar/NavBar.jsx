import CartWidget from '../CartWidget/CartWidget'
import './styles.css'
import Laptop from './assets/Laptop.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="header">
    <div className="logo">
      <Link to="/"><img className="logo" src={Laptop} alt="logo"/></Link>
    </div>
    <nav>
       <ul className="nav-links">
            <li><Link to="/">Products</Link></li>
            <li><Link to="/products/laptop">Laptops</Link></li>
            <li><Link to="/products/headsets">Headsets</Link></li>
            <li><Link to="/products/keyboards">Keyboards</Link></li>
            <li><Link to="/products/mouses">Mouses</Link></li>
       </ul>            
    </nav>
    <div>
      <CartWidget />
    </div>
    
</header>
  )
}

export default NavBar

