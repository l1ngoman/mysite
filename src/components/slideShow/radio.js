import React, { Component } from 'react';
import {radio} from '../../styles/Main'

class Radio extends Component {
  render() {
    let { index, value, toggleImage } = this.props
    return (
        <div 
          style={index === value ? radio.clicked : radio.unclicked} 
          onClick={() => toggleImage(value)}
          >
        </div>
    );
  }
}

export default Radio;