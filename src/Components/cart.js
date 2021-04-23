//NOTE: even though my job is the backend, I can only do so much without access to the frontend
//as one of my jobs is to add things to the cart, so I think I should go ahead and create it

import { React, useState, useEffect } from "react";
import { cartGetRequest, cartDeleteRequest } from "../endpoints/fetchrequests";
import { GETCART, useStore, DELETEFROMCART} from "../endpoints/store";
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
    },[])
    // useEffect(() => {
    //   filterRequest(products)
    //     .then((products) => {
    //       dispatch({ type: DISPLAYPRODUCTS, payload: products});
    //     })
    //     .then((list) => setProductList(list));
    // }, []);
  
    console.log(cart)

    // const deleteItem = (item) => {
     
    //   cartDeleteRequest(item)
    //   .then((item) => {
    //     dispatch({ type: DELETEFROMCART, payload: item});
    //   })
    //   console.log(cart)
             
    // }
    

//     if(cart.length === 0){
// return(<div>Cart is empty</div>)
//     }
   return(<>{cart.map((item) => {
    return ( <>
    <div>name: {item.cart.name}</div>
    <div>price: ${item.cart.price}</div>
    <div>category: {item.cart.category}</div>
    <div> description: {item.cart.description}</div>
    {/* <button onClick = {deleteItem(item)}> Delete</button> */}
    </> )})  }</>)
    
}

      export default Cart;