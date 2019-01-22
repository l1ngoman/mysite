import React, { Component } from 'react';
import LogoBar from '../logoBar'
import position from '../../styles/Positioning'
import theme from '../../styles/Theme';

class Footer extends Component {
  render() {
    return (
      <main style={window.innerWidth < 680 ? footer.small : footer.large}>
        <nav style={position.x}>
          <LogoBar 
          type="button"
          site="linkedIn"
          logoValues={[2]}
          />
          <LogoBar 
            type="button"
            site="git"
            logoValues={[3]}
            />
        </nav>
      </main>
    );
  }
}
const footer = {
  large: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.text.dark,
    bottom: "0",
    width: "100%",
    height: "60px",
    border: `2px solid ${theme.text.dark}`,
  },
  small: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.text.dark,
    bottom: "0",
    width: "100%",
    height: "50px",
    border: `2px solid ${theme.text.dark}`,
  }
}

export default Footer;
