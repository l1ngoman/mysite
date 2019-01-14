import React, { Component } from 'react';
import {mainStyle,mainStyleHover,tileTitle,link} from './styles.js'

class ProjectTile extends Component {
  constructor(props){
    super(props)
    this.state = {
      hover: false
    }
  }
  render() {
    let { hover } = this.state;
    const {title,href} = this.props.info
    return (
      <a href={href} style={link} onMouseEnter={()=>this.changeHover(true)} onMouseLeave={()=>this.changeHover(false)}>
        <main style={hover ? mainStyleHover :mainStyle}>
            <h4 style={tileTitle}>{title}</h4>
        </main>
      </a>
    );
  }

  changeHover = (bool) => {
    this.setState({hover: bool})
  }
}

export default ProjectTile;
