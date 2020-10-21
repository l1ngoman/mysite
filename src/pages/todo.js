import React, { Component } from 'react';
import PageTitle from '../components/pageTitle'
import { page } from '../styles/Main'

class ToDo extends Component {
  render() {
    return (
      <main style={page.container}>
        <PageTitle title="ToDo" />

        <ol style={page.paragraph}>
          <li>Add Coterie site work</li>
          <li>Add RMC Morton Law work - testimonial?</li>
          <li>List out API experience with NasaNeo, Twilio, QBO, and Xero</li>
          <li>Incorporate an external API with new projects</li>
          <li>RentableLite - use Redux (maybe Google Maps?)</li>
          <li>JustBudgetLite - use Hooks (Mint.com?)</li>
          <li>Update ReadMe files on GitHub</li>
          <li>Contact form - look into netlify</li>
        </ol>
      </main>
    );
  }
}

export default ToDo;
