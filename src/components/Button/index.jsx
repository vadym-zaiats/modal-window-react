import React from "react";
import "../Button/index.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.backgroundColor}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
