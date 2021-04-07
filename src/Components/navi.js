import React from "react";
import { Link } from "react-router-dom";

function Navi(props) {
  return (
    <div>
      <nav>
        <button>
          <Link to="/Hompage">Home</Link>
        </button>
        <button>
          <Link to="/products">All Products</Link>
        </button>
      </nav>
    </div>
  );
}

export default Navi;
