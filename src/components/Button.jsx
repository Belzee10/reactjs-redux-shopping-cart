import React from "react";

const Button = props => {
  const { product } = props;
  const oneButton = (
    <button
      className="btn btn-secondary btn-sm btn-block"
      onClick={() => props.addToCart(product)}
    >
      Add to cart
    </button>
  );
  const twoButtons = (
    <React.Fragment>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => props.deleteFromCart(product)}
      >
        -
      </button>
      <span>
        {product.inCart} {product.inCart > 1 ? "products" : "product"} in cart
      </span>
      <button
        className="btn btn-secondary btn-sm"
        disabled={product.inCart === product.quantity}
        onClick={() => props.addToCart(product)}
      >
        +
      </button>
    </React.Fragment>
  );

  return (
    <div className="buttons">{product.inCart < 1 ? oneButton : twoButtons}</div>
  );
};

export default Button;
