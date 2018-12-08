import React, { Component } from 'react';

class Lobbies extends Component {

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h1>Lobbies</h1>
        <input type="text" id='searchField' />
      </div>
    )
  }
}

export default Lobbies;
