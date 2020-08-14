import React, { Component } from "react";
import Message from "./message/Message";

class Messanger extends Component {
  render() {
    return (
      <div>
        <h1>Messanger</h1>
        <Message avatar="https://www.w3schools.com/w3css/img_lights.jpg" />
      </div>
    );
  }
}

export default Messanger;
