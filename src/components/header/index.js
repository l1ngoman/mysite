import React, { Component } from 'react';
import { header } from './styles'
import NavButton from './navButton'
import theme from '../../styles/Theme';

class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <main style={header.container}>
        <nav style={header.navSpacer}>
          <div style={{width: "177px"}}>
            <img style={window.innerWidth < 680 ? header.logo.small : header.logo.large} src="/images/AndyGarrett2.png"/>
          </div>
          <div style={{color: theme.text.light}}>
          <div style={header.name}>Andrew Garrett</div>
            
            {window.innerWidth > 680 && <div style={header.navTitle}><hr/>Full-Stack Web Developer | Software Engineer</div>}
          </div>
          <section style={header.topAll}>
            <nav style={header.topEach}>
              <NavButton link={{name: 'Home', path: '/'}} />
            </nav>
            <nav style={header.topEach}>
              <NavButton link={{name: 'Projects', path: "/projects"}} />
            </nav>
            <nav style={header.topEach}>
              <NavButton link={{name: 'Contact', path: "/contact"}} />
            </nav>
          </section>
        </nav>
      </main>
    );
  }
}

export default Header;
