import React, { Component } from 'react';
import LogoTile from './logoTile'

class LogoBar extends Component {
  render() {
    let logos = this.props.logoValues.map((el,i) => {
      return <LogoTile 
              key={i} 
              index={el} 
              type={this.props.type}
              site={this.props.site}
              />
    })
    return (
      <main style={bar}>
        {logos}
      </main>
    );
  }
}
const bar = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
}

export default LogoBar;
