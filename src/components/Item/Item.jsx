import { Link } from 'react-router-dom'
import './styles.css'

const Item = ( {product} ) => {
    
  return (
    <div className="card" >
      <img src={product.image} alt={product.title}/>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
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