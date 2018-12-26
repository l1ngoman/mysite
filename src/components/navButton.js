import React, { Component } from 'react';
import theme from '../styles/Color'

class NavButton extends Component {
  constructor(props){
    super(props)

    this.styles = {
      content: {
        margin: "5px",
      },
    }
  }
  render() {
    let { content} = this.styles
    let { name, path } = this.props.link
    return (
      <main>
        <a style={theme.links} href={path}>
            <div style={content}>
              {name}
            </div>
        </a>
      </main>
    );
  }
}

export default NavButton;
