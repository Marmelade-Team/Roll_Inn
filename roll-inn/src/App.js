import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {this.state.hasUpdate !== undefined && (this.state.hasUpdate ? (
          <p className="sw-notification">Une mise à jour est disponible. Veuillez rafraîchir l'application.</p>
        ) : (
          <p className="sw-notification">L'application est maintenant en cache et prête à être utilisée hors ligne.</p>
        ))}
      </div>
    );
  }
}

export default App;
