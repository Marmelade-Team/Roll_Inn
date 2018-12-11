import React, { Component } from 'react';
import './button.scss';

class Button extends Component {

  render() {
    return (
      <button
        className={'button ' + this.props.className}
        onClick={this.props.onClick}
        active={this.props.active}
        type='button'>
          {this.props.children}
      </button>
    );
  }
}

export default Button;
