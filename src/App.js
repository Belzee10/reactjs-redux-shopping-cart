import React, { Component } from "react";
import "./css/bootstrap.min.css";
import "./css/styles.css";
import products from "./products";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
    this.handleTotalItems = this.handleTotalItems.bind(this);
  }

  componentWillMount() {
    this.setState({
      products
    });
  }

  handleAddToCart(product) {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].inCart++;
    this.setState({
      products
    });
  }

  handleDeleteFromCart(product) {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].inCart--;
    this.setState({
      products
    });
  }

  handleTotalItems() {
    const totalItems = this.state.products
      .map(product => {
        return product.inCart;
      })
      .reduce((prev, value) => {
        return prev + value;
      });
    return totalItems;
  }

  render() {
    return (
      <div className="App">
        <Navbar totalItems={this.handleTotalItems()} />
        <Header />
        <div className="container">
          <Products
            products={this.state.products}
            addToCart={this.handleAddToCart}
            deleteFromCart={this.handleDeleteFromCart}
          />
        </div>
      </div>
    );
  }
}

export default App;
