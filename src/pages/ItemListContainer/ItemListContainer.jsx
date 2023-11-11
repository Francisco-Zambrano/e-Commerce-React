import { useEffect, useState } from "react";
import { getProducts } from "./resources/AsyncMock";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const category = useParams().category;
       
    useEffect(() => {
      getProducts()
        .then((res) => {
          if(category){
            setProducts( res.filter((prod) => prod.category === category));
          }else{
            setProducts(res)
          }  
        })
    }, [category])
    
  return (
    <div><ItemList products={products}/></div>
  )
}

export default ItemListContainer