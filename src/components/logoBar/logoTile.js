import React, { Component } from 'react';
import theme from '../../styles/Theme'
import content from '../../content';

class TechLogo extends Component {
  constructor(props){
    super(props)
      this.state = {
        hover: false,
        size: [
          "60px", "80px", "100px", "120px"
        ],
        size2: [
          "25px", "45px", "65px", "85px"
        ]
      }
      this.logoContainerLang = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: this.state.size[this.props.size],
        width: this.state.size[this.props.size],
        color: theme.text.light,
        textShadow: `1px 1px ${theme.text.shadow}`,
        textDecoration: "none",
        marginLeft: "10px",
        marginRight: "10px",
        borderRadius: "10px"
      }
      this.logoContainerLangHover = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: this.state.size[this.props.size],
        width: this.state.size[this.props.size],
        color: theme.text.light,
        textShadow: `1px 1px ${theme.text.shadow}`,
        backgroundColor: theme.text.primary,
        //border: `1px solid ${theme.text.light}`,
        textDecoration: "none",
        marginLeft: "10px",
        marginRight: "10px",
        borderRadius: "10px"
      }
      this.logoStyleLang = {
        height: this.state.size2[this.props.size],
        width: this.state.size2[this.props.size],
      }
    }
  render() {
    let { hover } = this.state;
    let { index,site,size } = this.props;
    return (
      <main>
        {this.props.type === "button"
        ? <a 
            href={button[index].link[site]} 
            style={hover ? logoContainerButtonHover : logoContainerButton}
            onMouseEnter={()=>this.changeHover(true)} 
            onMouseLeave={()=>this.changeHover(false)}
            >
          <i className={button[index].logo} title={button[index].name}>
          </i>
            <h6>{button[index].name}</h6>
          </a>
        : <a 
            href={content.languageInfo[index].link} 
            style={hover ? this.logoContainerLangHover : this.logoContainerLang}
            onMouseEnter={()=>this.changeHover(true)} 
            onMouseLeave={()=>this.changeHover(false)}
            >
            <img 
              style={this.logoStyleLang} 
              src={content.languageInfo[index].logo} 
              title={content.languageInfo[index].name}
              />
            <h6 style={{textAlign: "center"}}>{content.languageInfo[index].name}</h6>
          </a>
        }
      </main>
    );
  }
  changeHover = (bool) => {
    this.setState({hover: bool})
  }
 
}

const button = [
  {
    name: "Visit Site",
    logo: "fas fa-2x fa-link",
    link: {
      bs_t3: "http://battleship-tictactoe.herokuapp.com/",
      nasa_neo: "http://nasa-neo-api.herokuapp.com/",
      own_up: "http://ownupgrownup.herokuapp.com/",
      cred_check: "http://php-credentials.herokuapp.com",
      my_site: ""
    }
  },
  {
    name: "View Code",
    logo: "far fa-2x fa-eye",
    link: {
      bs_t3: "https://github.com/l1ngoman/battleshipbrah",
      nasa_neo: "https://github.com/l1ngoman/NasaNeoReactAPI",
      own_up: "https://github.com/jack2point0",
      cred_check: "https://github.com/l1ngoman/PHP-Password-Checker",
      my_site: "https://github.com/l1ngoman/mysite"
    }
  },
  {
    name: "",
    logo: "fab fa-3x fa-linkedin-in",
    link: {
      linkedIn: "https://www.linkedin.com/in/athomasgarrett/"
    }
  },
  {
    name: "",
    logo: "fab fa-3x fa-github",
    link: {
      git: "https://github.com/l1ngoman"
    }
  },
]
const logoContainerButton = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "45px",
  width: "45px",
  fontSize: "12px",
  color: theme.text.light,
  textDecoration: "none",
  marginLeft: "15px",
  marginRight: "15px",
  backgroundColor: theme.text.primary,
  //border: `2px solid ${theme.text.dark}`,
  borderRadius: "10px"
}
const logoContainerButtonHover = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "45px",
  width: "45px",
  fontSize: "12px",
  color: theme.text.primary,
  textDecoration: "none",
  marginLeft: "15px",
  marginRight: "15px",
  backgroundColor: theme.text.light,
  //border: `2px solid ${theme.text.dark}`,
  borderRadius: "10px"
}

export default TechLogo;
