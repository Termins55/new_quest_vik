import React, { Component } from "react";

class ResourceSwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      productId: 1,
      isLoading: true,
    };
  }

  loadResource = () => {
    fetch(`https://dummyjson.com/products/${this.state.productId}`)
      .then((response) => response.json())
      .then((data) => this.setState({ product: data, isLoading: false }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.loadResource();
  }

  componentDidUpdate(prevState) {
    const { productId } = this.state;
    if (prevState.productId !== productId) {
      this.loadResource();
    }
  }

  nextHandler = () => {
    this.setState({ productId: this.state.productId + 1 });
  };

  prevHandler = () => {
    if (this.state.productId >= 1) {
      this.setState({ productId: this.state.productId - 1 });
    }
  };

  render() {
    const { product, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button onClick={this.prevHandler}>Prev</button>
        <button onClick={this.nextHandler}>Next</button>
      </>
    );
  }
}
export default ResourceSwitcher;
