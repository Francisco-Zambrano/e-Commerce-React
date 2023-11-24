import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const category = useParams().category;
       
    useEffect(() => {
    
      const db = getFirestore();
      const productsRef = collection(db, "products");

      getDocs(productsRef)
        .then((resp) => {
          setProducts(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          );
        })

    }, [category])
    
  return (
    <div><ItemList products={products}/></div>
  )
}

export default ItemListContainer