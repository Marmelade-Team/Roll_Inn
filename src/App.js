import React, { Component } from 'react';
import './App.css';
import GameContainer from './containers/gameContainer'

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

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
      <GameContainer/>
    );
  }
}

export default App;
