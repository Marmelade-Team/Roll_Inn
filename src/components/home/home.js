import React, { Component } from 'react';
import './home.scss';
import Button from '../ui/button'
import { db } from '../../firebase'

class Home extends Component {

  componentDidMount(){
    db.collection("users").add({
        first: "oui",
        last: "Lovelace",
        born: 15
    })
  }

  render() {
    return (
      <div className="home">
        home
        <div className="oui">pio</div>
        <div className="oui">pio</div>
        <div className="oui">pio</div>
        <div className="oui">pio</div>
        <div className="oui">pio</div>
        <div className="oui">pio</div>
        <div className="oui">pio</div>
        <div className="oui">pio</div>
        <div className="oui">pio</div>
        <div className="oui">pio</div>
        <Button> fun </Button>
      </div>
    );
  }
}

export default Home;