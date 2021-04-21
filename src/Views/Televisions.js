import React from "react";

function Televisions(props) {
  
  return <> <div>List of Televisions</div>;
  <div>{props.products.filter((product) => product.category === "Televisions")}</div></>
}

export default Televisions;
