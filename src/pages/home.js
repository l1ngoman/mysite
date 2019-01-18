import React, { Component } from 'react';
import PageTitle from '../components/pageTitle'
import { page } from '../styles/Main'

class Home extends Component {
  render() {
    return (
      <main style={page.container}>
        <PageTitle title="ToDo" />

        <ol style={page.paragraph}>
          <li>Own-up grown-up content</li>
          <li>Fix styling on Password Checker</li>
          <li>Home content - About Me</li>
          <li>Contact form - look into netlify</li>
          <li>Add Coterie site work</li>
          <li>List production process of creating the app, basic to finished</li>
        </ol>
      </main>
    );
  }
}

export default Home;
