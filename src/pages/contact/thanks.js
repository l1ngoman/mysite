import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { page } from '../../styles/Main'

class Thanks extends Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
    }
  render() {
    return (
      <main style={page.container}>
        <br/><br/><br/><br/>
        <h1 style={page.sectionTitle}>Thank you for your submission! I will be in contact with you shortly.</h1>
        <h5 style={page.paragraph}>Redirecting you back home... {this.state.time}</h5>
        {this.state.redirect && <Redirect to="/" />}
     </main>
    );
  }
  componentDidMount(){
    setTimeout(function(){
        this.setState({redirect: true});
        }.bind(this),2500);
  }
}

export default Thanks;
