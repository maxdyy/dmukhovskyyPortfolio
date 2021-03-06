import React, { Component } from "react";

class Button extends Component {
  render() {
    const { text, type } = this.props;
    return (
      <button className="waves-effect waves-light btn dm-button" type={type}>
        {text}
      </button>
    );
  }
}

export default Button;
