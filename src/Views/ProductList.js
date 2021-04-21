
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../components/Productitem"
import SearchEngine from "../components/SearchEngine"
import { filterRequest } from "../endpoints/fetchrequests";
import { DISPLAYPRODUCTS, useStore } from "../endpoints/store";

function ProductList(props) {
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

  return ( 
    <><SearchEngine/>
    
   
    <>{products.map((product)=> {
      return(<ProductItem  product = {product} />)
      
   
    } 
  )
}</></>
  
    
)
}

export default ProductList;