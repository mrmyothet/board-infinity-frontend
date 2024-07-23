import React from "react";

// function component
// function Greeting(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// class components
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Greeting;
