import {React, useState, useEffect} from "react";
import ProductItem from "../components/Productitem"
import SearchEngine from "../components/SearchEngine"
import { filterRequest } from "../endpoints/fetchrequests";
import { DISPLAYPRODUCTS, useStore } from "../endpoints/store";
import { Container } from "react-bootstrap";

function Computers(props) {
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
     <div>List of Computers</div>
    {products.filter((product)=> product.category === "Computers").map((product)=> {
      return(<ProductItem  product = {product} />)
      
   
    } 
  
      
  )}</> )
  
  //return .filter of product in Computer deparment
}

export default Computers;
