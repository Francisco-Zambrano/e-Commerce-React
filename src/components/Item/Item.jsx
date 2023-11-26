import { Link } from 'react-router-dom'
import './styles.css'

const Item = ( {product} ) => {
    
  return (
    <div className="card-container" >
      <div className='img-card-container'>
        <img className='card-img' src={product.image} alt={product.title}/>
      </div>
      
      <h3>{product.title}</h3>
      <h6>${product.price}</h6>
      <div>
        <Link to={`/item/${product.id}`}>
          <button className='card-btn' >Ver más</button>
        </Link>
      </div>
    </div>
  )
}

export default Item