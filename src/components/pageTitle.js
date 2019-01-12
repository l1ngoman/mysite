import React, { Component } from 'react';
import theme from '../styles/Theme'

class PageTitle extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <main style={left}>
        <h1 style={title}>{this.props.title}</h1>
        <hr style={hr}/>
      </main>
    );
  }
}
const title = {
  
  textAlign: "left",
  color: theme.text.secondary,
  textShadow: `1px 1px ${theme.text.dark}`,
  marginLeft: "10px"
}
const left = {
  display: "flex",
  flexDirection: "column",
}
const hr = {
  width: "80vw",
  border: `1px solid ${theme.text.secondary}`
}

export default PageTitle;
