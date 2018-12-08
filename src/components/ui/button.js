import React, { Component } from 'react';
import './button.scss';

class Button extends Component {

  render() {
    return (
      <button className="button { this.props.className }"
          type="button">
        { this.props.text }
      </button>
    );
  }
}

export default Button;
