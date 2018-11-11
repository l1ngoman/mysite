import React, { Component } from 'react';


class NavButton extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let { title, path } = this.props.link
    return (
      <main>
        <a href={path}>
            <div className="navButtonTop">
              {title}
            </div>
        </a>
      </main>
    );
  }
}

export default NavButton;
