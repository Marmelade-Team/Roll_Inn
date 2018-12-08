import React, { Component } from 'react';
import './App.css';
import LobbiesContainer from './containers/lobbiesContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasUpdate: undefined };
  }

  componentWillMount() {
    if (window.swObservable) {
      window.swObservable.subscribe(hasUpdate => this.setState({ hasUpdate }));
    }
  }


  render() {
    return (
      <LobbiesContainer/>
    );
  }
}

export default App;
