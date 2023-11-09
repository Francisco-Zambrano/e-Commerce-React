import { useEffect, useState } from "react";
import { getProducts } from "./resources/AsyncMock";
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      getProducts()
        .then((res) => {
            setProducts(res);
        })
    }, [])
    
  return (
    <div><ItemList products={products}/></div>
  )
}

export default ItemListContainer