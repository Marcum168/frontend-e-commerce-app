  import {React, useState, useEffect} from "react";
import ProductItem from "../components/ProductItem"
import SearchEngine from "../components/SearchEngine"
import { filterRequest } from "../endpoints/fetchrequests";
import { DISPLAYPRODUCTS, useStore } from "../endpoints/store";

function Headphones(props) {
  



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
     <div>List of Headphones</div>
    {products.filter((product)=> product.category === "Headphones").map((product)=> {
      return(<ProductItem  product = {product} />)
      
   
    } 
  
      
  )}</> )
   
  //return .filter of product in Headphones deparment
  
}
export default Headphones;
