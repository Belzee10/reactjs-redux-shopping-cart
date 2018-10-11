import React from "react";
import Product from "./Product";

const Products = props => {
  return (
    <div className="products">
      {props.products.map(product => (
        <Product
          product={product}
          key={product.id}
          addToCart={props.addToCart}
          deleteFromCart={props.deleteFromCart}
        />
      ))}
    </div>
  );
};

export default Products;
