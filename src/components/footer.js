import React, { Component } from 'react';
import position from '../styles/Positioning'

class Footer extends Component {
  render() {
    return (
      <main style={position.y}>
        <nav style={position.x}>
          <a href="https://www.linkedin.com/in/athomasgarrett"><nav><img style={social} src='./images/linkedin_ico.png'/></nav></a>
          <a href="https://github.com/l1ngoman"><nav><img style={social} src='./images/github_ico.png'/></nav></a>
        </nav>
      </main>
    );
  }
}
const social = {
  height: "50px",
  width: "50px",
  margin: "20px",
}

export default Footer;
