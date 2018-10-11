import React from "react";
import Button from "./Button";

const Product = props => {
  const { product } = props;
  return (
    <div className="card">
      <img className="card-img-top" src={product.img} alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <span className="float-left">
          <strong>${product.price}</strong>
        </span>
      </div>
      <div className="footer">
        <Button
          product={product}
          addToCart={props.addToCart}
          deleteFromCart={props.deleteFromCart}
        />
      </div>
    </div>
  );
};

export default Product;
