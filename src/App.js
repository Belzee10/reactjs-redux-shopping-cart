import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
  addToCart,
  removeFromCart
} from "./actions/productAction";
import PropTypes from "prop-types";
import "./css/bootstrap.min.css";
import "./css/styles.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
    this.countTotalItems = this.countTotalItems.bind(this);
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  handleAddToCart(product) {
    this.props.addToCart(product);
  }

  handleDeleteFromCart(product) {
    this.props.removeFromCart(product);
  }

  countTotalItems() {
    const products = [...this.props.products];
    let totalItems = 0;
    if (products.length) {
      totalItems = products
        .map(product => {
          return product.inCart;
        })
        .reduce((prev, value) => {
          return prev + value;
        });
    }
    return totalItems;
  }

  render() {
    return (
      <div className="App">
        <Navbar totalItems={this.countTotalItems()} />
        <Header />
        <div className="container">
          <Products
            products={this.props.products}
            addToCart={this.handleAddToCart}
            deleteFromCart={this.handleDeleteFromCart}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  products: state.products.items
});

export default connect(
  mapStateToProps,
  { fetchProducts, addToCart, removeFromCart }
)(App);
