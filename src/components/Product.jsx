import React from "react";

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
        <button className="btn btn-warning btn-sm btn-block">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
