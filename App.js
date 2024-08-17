import React, { Component } from "react";
import Display from "./Display";
class App extends Component {
  state = {
    firstName: "alex",
    age: 20,
    city: "pune",
  };

  handleUpdate = () => {
    this.setState({
      city: "hyderabad",
      age: 40,
    });
  };

  render() {
    return (
      <div>
        <Display />
        <p>
          my name is {this.state.firstName}, age is {this.state.age}, living in {this.state.city}
        </p>

        <button onClick={this.handleUpdate}>update</button>
      </div>
    );
  }
}

export default App;