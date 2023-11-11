import './Styles.css'

const ItemDetail = ( {item} ) => {
  return (
    <div className="card-detail" >
        <div className='img-container'>
            <img className='img-detail' src={item.image} alt={item.title}/>
        </div>
        <div>
            <h3 className='h3-details'>{item.title}</h3>
            <p className='p-details'>{item.description}</p>
            <h6 className='h6-details'>Precio: ${item.price}</h6>
            <div>
              <button>boton</button>
            </div>
        </div>
        
      
      
      
    </div>
  )
}

export default ItemDetail