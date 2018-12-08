import React, { Component } from 'react'

class SearchField extends Component{

  render(){
    return(
      <div>
        
        <input type="text" onChange={this.props.onChange()}/>
      </div>
    )
  }
}

export default SearchField
