import { useState, useEffect } from "react"
import { getProductsById } from "../ItemListContainer/resources/AsyncMock"
import ItemDetail from "../../components/ItemDetail/ItemDetail"

const ItemDetailContainer = ( {itemId} ) => {

  const [item, setItem] = useState(null)

  useEffect(() => {
    getProductsById(itemId)
      .then((res) => {
        setItem(res)
      })
  }, [itemId])
  
  return (
    <div>
      {item && <ItemDetail item={item} />}

    </div>
  )
}

export default ItemDetailContainer