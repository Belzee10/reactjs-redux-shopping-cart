import React from "react";
import Product from "./Product";

const Products = props => {
  return (
    <div className="products">
      {props.products.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
