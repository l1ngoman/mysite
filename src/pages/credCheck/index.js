import React, { Component } from 'react';
import PageTitle from '../../components/pageTitle'
import LogoBar from '../../components/logoBar'


class CredCheck extends Component {
  render() {
    return (
      <main>
        <PageTitle title="Credential Checker" />
        <a href="https://php-credentials.herokuapp.com/">ME!!!</a>
        <br/><br/>
        <LogoBar logoValues={[8,4,5]}/>
      </main>
    );
  }
}

export default CredCheck;

//web: ""
//git: ""