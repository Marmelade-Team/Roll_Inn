import React, { Component } from 'react';
import './home.scss';
//import { db } from '../../firebase'

class Home extends Component {

  componentDidMount(){
    /*db.collection("users").add({
        first: "oui",
        last: "Lovelace",
        born: 15
    })*/
  }

  render() {
    return (
      <div className="home">
      </div>
    );
  }
}

export default Home;
