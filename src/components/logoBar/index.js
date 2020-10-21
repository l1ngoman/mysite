import React, { Component } from 'react';
import LogoTile from './logoTile'

class LogoBar extends Component {
  render() {
    let logos = this.props.logoValues.map((el,i) => {
      return <LogoTile 
              key={i} 
              index={el}
              size={this.props.size}
              type={this.props.type}
              site={this.props.site}
              />
    })
    return (
      <main style={window.innerWidth <= 800 ? bar.small : bar.large}>
        {logos}
      </main>
    );
  }
}
const bar = {
  large: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "no-wrap",
  },
  small: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  }
}

export default LogoBar;
