import React, { Component } from 'react';
import PageTitle from '../components/pageTitle'
import { page } from '../styles/Main'

class ToDo extends Component {
  render() {
    return (
      <main style={page.container}>
        <PageTitle title="ToDo" />

        <ol style={page.paragraph}>
          <li>Fix styling on Password Checker</li>
          <li>Contact form - look into netlify</li>
          <li>Add Coterie site work</li>
          <li>List production process of creating the app, basic to finished</li>
        </ol>
      </main>
    );
  }
}

export default ToDo;
