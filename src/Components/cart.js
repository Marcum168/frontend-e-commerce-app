//NOTE: even though my job is the backend, I can only do so much without access to the frontend
//as one of my jobs is to add things to the cart, so I think I should go ahead and create it

import { React, useState, useEffect } from "react";
import { cartGetRequest } from "../endpoints/fetchrequests";
import { GETCART, useStore } from "../endpoints/store";
function Cart(props){
    const cart = useStore((state) => state.cart);
    const dispatch = useStore((state) => state.dispatch);
console.log(cart);
    useEffect(() => {
        cartGetRequest(cart)
          .then((cart) => {
            dispatch({ type: GETCART, payload: cart});
          })
          console.log(cart)
    })
    console.log(cart)

//     if(cart.length === 0){
// return(<div>Cart is empty</div>)
//     }
   return(<>{cart.map((item) => {
    return ( <>
    <div>name: {item.name}</div>
    <div>price: ${item.price}</div>
    <div>category: {item.category}</div>
    <div> description: {item.description}</div>
    </> )})  }</>)
    
}

      export default Cart;