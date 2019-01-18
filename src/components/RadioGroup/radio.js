import React, { Component } from 'react';
import {radio} from '../../styles/Main'

class Radio extends Component {
  render() {
    let { index,value,id } = this.props

    return (
      <main style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight: "10px"}}>
        <div
          style={index == id ? radio.clicked2 : radio.unclicked2} 
          onClick={() => this.handleChange(value)}
          >
        </div>
        <label>{value}</label>
      </main>
    );
  }
  handleChange = (value) => {
    //console.log(value)
    this.props.handleChangeParent(value)
  }
}

export default Radio;