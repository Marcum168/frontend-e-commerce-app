import {React, useState, useEffect} from "react";
import ProductItem from "../components/Productitem"

import { filterRequest } from "../endpoints/fetchrequests";
import { DISPLAYPRODUCTS, useStore } from "../endpoints/store";

function SearchEngine(props){
const [search, setSearch] = useState('')
const [productList, setProductList] = useState([]);
const products = useStore((state) => state.products);
  const dispatch = useStore((state) => state.dispatch);
  
  console.log(products);

  export const loginRequest = (username, password) => {
  
  
    return fetch(baseURL + "auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json());
  };

  export const logoutRequest = (token) => {
 
    return fetch(baseURL + "auth/logout", {
      headers: { Authorization: "Bearer " + token },
    }).then((res) => res.json());
  };
  
  useEffect(() => {
    filterRequest(products)
      .then((products) => {
        dispatch({ type: DISPLAYPRODUCTS, payload: products});
      })
      .then((list) => setProductList(list));
  }, []);
  const SearchQuery = (e) => {
   products.filter((product) => product.name === search || product.category === search || product._id === search)
    setSearch('');
    console.log(products)
    return(
        <>
        <div>Hello</div>
        {products.map((product)=> {
            return(<ProductItem  product = {product} />)
            
         
          } 
    )
        }</>
    )
  }
    const handleSearchChange = (e) => {

setSearch(e.target.value)
console.log(search)
console.log(e.key)
if(e.key === "Enter"){
    SearchQuery()
}
    }

    return(<>
    <input type = "text" placeholder = "search" onChange = {handleSearchChange}/>
        <button onClick = {SearchQuery}>Go!</button>
    </>
        
    )
}
export default SearchEngine