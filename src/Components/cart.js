import React, { useState } from "react";
import { cartAddRequest } from "../endpoints/fetchrequests";
import { Form, Button } from "react-bootstrap";

<<<<<<< HEAD
function Cart(props) {
  <div></div>;
}

return <></>;

=======
import { React, useState, useEffect } from "react";
import {
  cartGetRequest,
  purchaseRequest,
  cartDeleteRequest,
} from "../endpoints/fetchrequests";
import {
  GETCART,
  PURCHASE,
  useStore,
  DELETEFROMCART,
} from "../endpoints/store";
function Cart(props) {
  let cart = useStore((state) => state.cart);
  const dispatch = useStore((state) => state.dispatch);

  console.log(cart);
  useEffect(() => {
    cartGetRequest(cart).then((cart) => {
      dispatch({ type: GETCART, payload: cart });
    });
    console.log(cart);
  }, []);
  // useEffect(() => {
  //   filterRequest(products)
  //     .then((products) => {
  //       dispatch({ type: DISPLAYPRODUCTS, payload: products});
  //     })
  //     .then((list) => setProductList(list));
  // }, []);

  console.log(cart);

   function deleteItem(item) {
    useEffect(()=> { purchaseRequest(cart)
      cartDeleteRequest(item)
      .then((item) => {
        dispatch({ type: DELETEFROMCART, payload: item});
      })})
    // cart = cart.filter((thing) => thing.cart.id != item.cart.id);

    // console.log(cart);
  };
  // const CheckOut = () => {
  //  useEffect(()=> { purchaseRequest(cart)
  //   .then((cart) => {
  //     dispatch({ type: PURCHASE, payload: cart});
  //   })
  //   console.log(cart)})

  // }

  //     if(cart.length === 0){
  // return(<div>Cart is empty</div>)
  //     }
  return (
    <>
      {cart.map((item) => {
        return (
          <>
            <div>name: {item.cart.name}</div>
            <div>price: ${item.cart.price}</div>
            <div>category: {item.cart.category}</div>
            <div> description: {item.cart.description}</div>
            <button onClick={() => deleteItem(item)}>delete</button>
          </>
        );
      })}
    </>
  );
}

>>>>>>> STORE_REQUESTS
export default Cart;
