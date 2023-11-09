import './styles.css'

const Item = ( {product} ) => {
    
  return (
    <div className="card" >
      <img src={product.image} alt={product.title}/>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h6>${product.price}</h6>
      <div>
        <button className='card-btn' href={`/item/${product.id}`}>Ver más</button>
      </div>
        
    </div>
  )
}

export default Item