import React, { Component } from 'react';
import './button.scss';

class Button extends Component {

  render() {
    return (
      <div className="button ">
        { this.props.text }
      </div>
    );
  }
}

export default Button;
