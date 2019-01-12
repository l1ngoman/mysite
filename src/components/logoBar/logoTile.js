import React, { Component } from 'react';
import theme from '../../styles/Theme'
import content from '../../content';

class TechLogo extends Component {
  render() {
    let { index,site } = this.props;
    return (
      <main>
        {this.props.type === "button"
        ? <a href={button[index].link[site]} style={logoContainerButton}>
            <img 
              style={logoStyleButton} 
              src={button[index].logo} 
              title={button[index].name}
              />
            <h6>{button[index].name}</h6>
          </a>
        : <a href={content.languageInfo[index].link} style={logoContainerLang}>
            <img 
              style={logoStyleLang} 
              src={content.languageInfo[index].logo} 
              title={content.languageInfo[index].name}
              />
            <h6>{content.languageInfo[index].name}</h6>
          </a>
        }
      </main>
    );
  }
}
const button = [
  {
    name: "Visit Site",
    logo: "https://webiconspng.com/wp-content/uploads/2017/01/Worldwide-Clipart-Icon.png",
    link: {
      bs_t3: "http://battleship-tictactoe.herokuapp.com/",
      nasa_neo: "https://nasa-neo-api.herokuapp.com/",
    }
  },
  {
    name: "View Code",
    logo: "http://cdn.onlinewebfonts.com/svg/img_469993.png",
    link: {
      bs_t3: "https://github.com/l1ngoman/battleshipbrah",
      nasa_neo: "https://github.com/l1ngoman/NasaNeoReactAPI"
    }
  },
]
const logoContainerButton = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
  width: "50px",
  fontSize: "14px",
  color: theme.text.primary,
  textDecoration: "none",
  marginLeft: "5px",
  marginRight: "5px",
  backgroundColor: theme.text.secondary,
}
const logoStyleButton = {
  height: "35px",
  width: "35px",
}
const logoContainerLang = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
  width: "50px",
  color: theme.text.primary,
  textDecoration: "none",
  marginLeft: "10px",
  marginRight: "10px"
}
const logoStyleLang = {
  height: "25px",
  width: "25px",
}

export default TechLogo;
