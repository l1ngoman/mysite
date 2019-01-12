import React, { Component } from 'react';
import {button,buttonHover,link} from './styles'

class NavButton extends Component {
  constructor(props){
    super(props)

    this.state = {
      hover: false
    }
  }
  render() {
    let { hover } = this.state;
    let { name, path } = this.props.link;
    return (
      <main>
        <a style={link} href={path} onMouseEnter={()=>this.changeHover(true)} onMouseLeave={()=>this.changeHover(false)}>
            <div style={hover ? buttonHover : button}>
              {name}
            </div>
        </a>
      </main>
    );
  }
  changeHover = (bool) => {
    this.setState({hover: bool})
  }
}

export default NavButton;
