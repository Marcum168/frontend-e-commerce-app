import create from "zustand";
import { devtools, redux } from "zustand/middleware";
// import {useReducer} from 'react'

const initialState = {products: [],  cart: '', balance: 2000, spent: 0 };

export const ADDTOCART = "ADDTOCART";
export const PURCHASE = "PURCHASE";
export const SEARCHITEM = "SEARCHITEM";
export const FILTERITEM = "FILTERITEM";
export const DISPLAYPRODUCTS = "DISPLAYPRODUCTS";
export const DELETEFROMCART = "DELETEFROMCART";
export const MANAGEBALANCE = "MANAGEBALANCE";
export const LOGIN = "LOGIN";
export const CREATEUSER = "CREATEUSER";
export const GETCART = "GETCART"

const reducer = (state, action) => {
  switch (action.type) {
    case ADDTOCART:
      return { cart: action.payload };
    case PURCHASE:
      return {};
    case SEARCHITEM:
      return { products: action.payload };
    case FILTERITEM:
      return { products: action.payload };
    case DISPLAYPRODUCTS:
      return { products: action.payload };
    case DELETEFROMCART:
      return { cart: action.payload };
    case MANAGEBALANCE:
      return { balance: action.payload };
    default:
      return state;
    case LOGIN:
      return { user: action.payload };
    case CREATEUSER:
      return { user: action.payload };
    case GETCART:
      return { cart: action.payload };
  }
};
export const useStore = create(devtools(redux(reducer, initialState)));
