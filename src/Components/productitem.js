//GAME PLAN:
import { React, useState, useEffect } from "react";
import { cartAddRequest } from "../endpoints/fetchrequests";
import { ADDTOCART, useStore } from "../endpoints/store";

function ProductItem(props) {

//   const [productList, setProductList] = useState([]);
  const cart = useStore((state) => state.cart);
  const dispatch = useStore((state) => state.dispatch);
//   console.log(products);

//   console.log(dispatch);
const CartAddition = (e) => {
        e.preventDefault()
                cartAddRequest(props.product)
              .then((product) => {
                dispatch({ type: ADDTOCART, payload: product});
              })
              console.log(cart)  
          }
       

  

//   console.log(products);

  //   return(<div>{productList}</div>)

  console.log(props.product.name);
  console.log(props.product.price);
  console.log(props.product.category);
  console.log(props.product.description);
      
  console.log("What's going on?")
return(<>
<div>{props.product.name}</div>
<div>Price: ${props.product.price}</div>
<div>Category: {props.product.category}</div>
<div>Description: {props.product.description}</div>
<button onClick = {CartAddition}>Add To Cart</button>
</>)
      
    
  
}

export default ProductItem;
