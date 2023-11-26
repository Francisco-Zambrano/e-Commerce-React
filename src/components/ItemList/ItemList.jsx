import Item from "../Item/Item"
import './styles.css'

const ItemList = ({products}) => {
    
  return (
    <main className="gallery">
      {products.map(prod => <Item product={prod} key={prod.id} />)}
    </main>
  )
}

export default ItemList