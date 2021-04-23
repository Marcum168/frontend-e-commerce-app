import {React, useState, useEffect} from "react";
import ProductItem from "../components/ProductItem"
import SearchEngine from "../components/SearchEngine"
import { filterRequest } from "../endpoints/fetchrequests";
import { DISPLAYPRODUCTS, useStore } from "../endpoints/store";

function Televisions(props) {
  
  const [productList, setProductList] = useState([]);
  const products = useStore((state) => state.products);
  const dispatch = useStore((state) => state.dispatch);
  
  console.log(products);

  
  useEffect(() => {
    filterRequest(products)
      .then((products) => {
        dispatch({ type: DISPLAYPRODUCTS, payload: products});
      })
      .then((list) => setProductList(list));
  }, []);

  console.log(products)

  





  return(
    <>
    <SearchEngine/>
    <div>List of Televisions</div>
    {products.filter((product)=> product.category === "Televisions").map((product)=> {
      return(<ProductItem  product = {product} />)
      
   
    } 
  
      
  )}</> )
  
  
}

export default Televisions;
