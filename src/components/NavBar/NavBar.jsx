import CartWidget from '../CartWidget/CartWidget'
import './styles.css'
import Laptop from './assets/Laptop.svg'

const NavBar = () => {
  return (
    <header className="header">
    <div className="logo">
    <img className="logo" src={Laptop} alt="logo"/>
    </div>
    <nav>
       <ul className="nav-links">
            <li><a href="#">Gamers</a></li>
            <li><a href="#">Oficina</a></li>
            <li><a href="#">Diseño</a></li>
       </ul>            
    </nav>
    <div>
      <CartWidget />
    </div>
    
</header>
  )
}

export default NavBar

