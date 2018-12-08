import React, { Component } from 'react';
import './buttonGroup.scss';

class ButtonGroup extends Component {

  render() {
    return (
      <div
        className={"buttonGroup " + this.props.className}>
          { this.props.children }
      </div>
    );
  }
}

export default ButtonGroup;
