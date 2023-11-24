import { useState, useEffect } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getFirestore } from "firebase/firestore"
import { doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = ( ) => {

  const [item, setItem] = useState(null)
  const id = useParams().id;

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "products", id);

    getDoc(docRef)
      .then((resp) => {
        setItem(
          { ...resp.data(), id: resp.id }
        )
      })
    
  }, [id])
  
  return (
    <div>
      {item && <ItemDetail item={item} />}

    </div>
  )
}

export default ItemDetailContainer