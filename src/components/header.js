import React, { Component } from 'react';
import { centerY,centerX } from '../styles/Positioning'
import NavButton from './navButton'

class Header extends Component {
  constructor(props){
    super(props)

    this.styles = {
      topEach: {
        margin: "5px",
      },
      logo: {
        height: "25px",
        width: "auto",
        float: "left",
      }
    }
  }
  render() {
    const { topEach,logo } = this.styles
    return (
      <main style={centerY}>
        <nav style={centerX}>
          <img style={logo} src="/images/AndyGarrett.png"/>
          <nav style={topEach}>
            <NavButton link={{name: 'Home', path: '/'}} />
          </nav>
          <nav style={topEach}>
            <NavButton link={{name: 'Projects', path: "/projects"}} />
          </nav>
          <nav style={topEach}>
            <NavButton link={{name: 'Contact', path: "/contact"}} />
          </nav>
        </nav>
      </main>
    );
  }
}

export default Header;
