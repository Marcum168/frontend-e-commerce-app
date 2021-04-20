//GAME PLAN: 
import React from "react";
import { filterRequest } from "../endpoints/fetchrequests";
import { DISPLAYPRODUCTS, useStore }  from '../endpoints/store'


function ProductItem(){
    const products = useStore((state) => state.products);
    const dispatch =  useStore((state) => state.dispatch);
        
       const listProducts = () =>{filterRequest(products).then(() =>
        dispatch({ type: DISPLAYPRODUCTS, payload: {} })).then((list)=> console.log(list))} 
       console.log(listProducts)
let productList = listProducts();
        //   return(<div>{productList}</div>)

return(<><div>{productList}</div></>)
     

}
export default ProductItem