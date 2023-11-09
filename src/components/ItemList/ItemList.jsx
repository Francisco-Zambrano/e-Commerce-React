import Item from "../Item/Item"
import './styles.css'

const ItemList = ({products}) => {
    
  return (
    <div className="gallery">
      {products.map(prod => <Item product={prod} key={prod.id} />)}
    </div>
  )
}

export default ItemList