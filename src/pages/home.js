import React, { Component } from 'react';
import PageTitle from '../components/pageTitle'

class Home extends Component {
  render() {
    return (
      <main>
        <PageTitle title="ToDo" />

        <ol>
          <li>Own-up grown-up content</li>
          <li>Media queries for Nasa-neo</li>
          <li>Fix styling on Password Checker</li>
          <li>Home content - About Me</li>
          <li>Contact form - look into netlify</li>
        </ol>
      </main>
    );
  }
}

export default Home;
