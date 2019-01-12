import React, { Component } from 'react';
import {headerContainer,topAll,topEach,logo,navSpacer} from './styles'
import NavButton from './navButton'

class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <main style={headerContainer}>
        <nav style={navSpacer}>
          <img style={logo} src="/images/AndyGarrett.png"/>
          <section style={topAll}>
            <nav style={topEach}>
              <NavButton link={{name: 'Home', path: '/'}} />
            </nav>
            <nav style={topEach}>
              <NavButton link={{name: 'Projects', path: "/projects"}} />
            </nav>
            <nav style={topEach}>
              <NavButton link={{name: 'Contact', path: "/contact"}} />
            </nav>
          </section>
        </nav>
      </main>
    );
  }
}

export default Header;
