import React from "react";

fetch('http://localhost:8080/api/product', {
  method: "POST",
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(this.state)
})
.then((response) => response.json())
.then((result) => {
  console.log(result)
})

export default class Form extends React.Component {
  state = {
    productName: "",
    productPrice: "",
    productQuantity: "",
    productImageLink: "",
    description: "",
    category: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      productName: "",
      productPrice: "",
      productQuantity: "",
      productImageLink: "",
      description: "",
      category: ""
    });
    this.props.onChange({
      productName: "",
      productPrice: "",
      productQuantity: "",
      productImageLink: "",
      description: "",
      category: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="productName"
          placeholder="Product Name"
          value={this.state.productName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="productPrice"
          placeholder="Product Price"
          value={this.state.productPrice}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="productQuantity"
          placeholder="Product Quantity"
          value={this.state.productQuantity}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="productImageLink"
          placeholder="Product Image Link"
          value={this.state.productImageLink}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="category"
          placeholder="Category"
          value={this.state.category}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Cadastrar Produto</button>
      </form>
    );
  }
}
