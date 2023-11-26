import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const category = useParams().category;
       
    useEffect(() => {
    
      const db = getFirestore();
      const productsRef = collection(db, "products");
      const q = category ? query(productsRef, where("category", "==", category)) : productsRef;

      getDocs(q)
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