import React, { Component } from 'react';
import theme from '../styles/Theme';

class WideButton extends Component {
    constructor(props){
        super(props)

        this.state = {
            style: (window.innerWidth < 680 ? label.normal.small : label.normal.large)
        }
    }
  render() {
    let { title,handleClick,id } = this.props
    let { style } = this.state
    return (
        <label 
            style={style} 
            onMouseEnter={() => this.handleChange(0)} 
            onMouseLeave={() => this.handleChange(1)} 
            onClick={() => handleClick(id)}
            >
            {title}
        </label>
    );
  }
  handleChange = (e) => {
      let { style } = this.state;
      if(window.innerWidth < 680){
        style = (e == 0 ? label.hover.small : label.normal.small)
      }else{
        style = (e == 0 ? label.hover.large : label.normal.large)
      }
      this.setState({style})
  }
}

const label = {
    normal: {
        large: {
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.text.light,
            backgroundColor: theme.text.primary,
            fontSize: "25px",
            height: "50px",
            width: "200px",
            borderRadius: "5px",
        },
        small: {
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.text.light,
            backgroundColor: theme.text.primary,
            fontSize: "17px",
            height: "50px",
            width: "120px",
            borderRadius: "5px",
            margin: ".5px",
            border: `1px solid ${theme.text.dark}`
        }
    },
    hover: {
        large: {
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.text.primary,
            backgroundColor: theme.text.light,
            fontSize: "25px",
            height: "50px",
            width: "200px",
            borderRadius: "5px",
        },
        small: {
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.text.primary,
            backgroundColor: theme.text.light,
            fontSize: "17px",
            height: "50px",
            width: "120px",
            borderRadius: "5px",
        }
        
    }
}


export default WideButton;