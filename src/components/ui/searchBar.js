import React, { Component } from 'react'
import './searchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBar extends Component{

  render(){
    return(
      <div className={"searchBar " + this.props.className}>
        <input type="text" onChange={this.props.onChange}/>
        <div className="searchIcon">
          <FontAwesomeIcon icon="search" size="2x"/>
        </div>
      </div>
    )
  }
}

export default SearchBar
