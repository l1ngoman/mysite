import React, { Component } from 'react';
import {headerContainer,topAll,topEach,logo,logo2,navSpacer,navTitle,name} from './styles'
import NavButton from './navButton'
import theme from '../../styles/Theme';

class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <main style={headerContainer}>
        <nav style={navSpacer}>
          <img style={window.innerWidth < 680 ? logo2 : logo} src="/images/AndyGarrett2.png"/>
          <div style={{color: theme.text.light}}>
          <div style={name}>Andrew Garrett</div>
            
            {window.innerWidth > 680 && <div style={navTitle}><hr/>Full-Stack Web Developer | Software Engineer</div>}
          </div>
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
