import React, { Component } from 'react';
import {button,buttonHover,button2,buttonHover2,link} from './styles'

class NavButton extends Component {
  constructor(props){
    super(props)

    this.state = {
      hover: false,
    }
  }
  render() {
    let { hover} = this.state;
    let { name, path } = this.props.link;
    return (
      <main>
        <a 
          alt={name}
          title={name}
          style={link} 
          href={path} 
          onMouseEnter={()=>this.changeHover(true)} 
          onMouseLeave={()=>this.changeHover(false)}
          >
          {window.innerWidth < 680
          ?   <div style={hover ? buttonHover2 : button2}>
                {name == "Home" && <i className={`fas fa-1x fa-home navButton`}></i>}
                {name == "Projects" && <i className="fas fa-1x fa-briefcase navButton"></i>}
                {name == "Contact" && <i className="fas fa-1x fa-envelope navButton"></i>}
              </div>
          :   <div style={hover ? buttonHover : button}>
                {name == "Home" && <i className={`fas fa-2x fa-home navButton`}></i>}
                {name == "Projects" && <i className="fas fa-2x fa-briefcase navButton"></i>}
                {name == "Contact" && <i className="fas fa-2x fa-envelope navButton"></i>}
              </div>}
        </a>
      </main>
    );
  }
  changeHover = (bool) => {
    this.setState({hover: bool})
  }
}

export default NavButton;
