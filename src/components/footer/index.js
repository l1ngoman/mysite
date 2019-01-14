import React, { Component } from 'react';
import LogoBar from '../logoBar'
import position from '../../styles/Positioning'
import theme from '../../styles/Theme';

class Footer extends Component {
  render() {
    return (
      <main style={footer}>
        <nav style={position.x}>
          <LogoBar 
            type="button"
            site="git"
            logoValues={[2,3]}
            />
        </nav>
      </main>
    );
  }
}
const footer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.text.dark,
  bottom: "0",
  width: "100%",
  height: "75px"
}

export default Footer;
