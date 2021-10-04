import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} /> s
      </div>
    );
  }
}

export default App;
