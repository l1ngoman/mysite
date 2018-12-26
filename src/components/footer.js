import React, { Component } from 'react';
import { centerY,centerX } from '../styles/Positioning'

class Footer extends Component {
  constructor(props){
    super(props)

    this.styles = {
      social: {
        height: "60px",
        width: "60px",
        margin: "20px",
      },
    }
  }
  render() {
    const { social } = this.styles
    return (
      <main style={centerY}>
        <nav style={centerX}>
          <a href="#"><nav><img style={social} src='./images/linkedin_ico.png'/></nav></a>
          <a href="#"><nav><img style={social} src='./images/github_ico.png'/></nav></a>
        </nav>
      </main>
    );
  }
}

export default Footer;
