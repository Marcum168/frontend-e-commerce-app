//GAME PLAN:
import { React, useState, useEffect } from "react";
import { filterRequest } from "../endpoints/fetchrequests";
import { DISPLAYPRODUCTS, useStore } from "../endpoints/store";

function ProductItem(props) {
  const [productList, setProductList] = useState([]);
  const products = useStore((state) => state.products);
  const dispatch = useStore((state) => state.dispatch);
  console.log(products);

  console.log(dispatch);
  useEffect(() => {
    filterRequest(products)
      .then((products) => {
        dispatch({ type: DISPLAYPRODUCTS, payload: products});
      })
      .then((list) => setProductList(list));
  }, [products]);

  console.log(products);

  //   return(<div>{productList}</div>)

  return (
    <>
      {products.map((product)=> {
return(<>
<div>{product.name}</div>
<div>Price: ${product.price}</div>
<div>Category: {product.category}</div>
<div>Description: {product.description}</div>
</>)
      })
    
  
}</>)
}
export default ProductItem;
