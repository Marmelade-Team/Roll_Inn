import React, { Component } from 'react'

class SearchBar extends Component{

  render(){
    return(
      <div>
        <input type="text" onChange={this.props.onChange}/>
      </div>
    )
  }
}

export default SearchBar
