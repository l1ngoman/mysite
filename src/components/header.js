import React, { Component } from 'react';

import NavButton from './navButton'

class Header extends Component {

  render() {
    return (
      <main>
        <h1>This is my Header.</h1>
        <nav className="topMain">
          <nav className="topEach">
            <NavButton link={{title: 'Home', path: '/'}} />
          </nav>
          <nav className="topEach">
            <NavButton link={{title: 'Projects', path: "/projects"}} />
          </nav>
          <nav className="topEach">
            <NavButton link={{title: 'Contact', path: "/contact"}} />
          </nav>
        </nav>
      </main>
    );
  }
}

export default Header;
