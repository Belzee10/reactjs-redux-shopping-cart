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
      products: products
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="container">
          <Products products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default App;
