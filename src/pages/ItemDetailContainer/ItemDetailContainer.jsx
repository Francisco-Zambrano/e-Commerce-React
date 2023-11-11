import { useState, useEffect } from "react"
import { getProductsById } from "../ItemListContainer/resources/AsyncMock"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ( ) => {

  const [item, setItem] = useState(null)
  const id = useParams().id;

  useEffect(() => {
    getProductsById(Number(id))
      .then((res) => {
        setItem(res)
      })
  }, [id])
  
  return (
    <div>
      {item && <ItemDetail item={item} />}

    </div>
  )
}

export default ItemDetailContainer