import React, { Component } from 'react';
import ContactForm from './contactForm.js'
import { page } from '../../styles/Main'

class ContactInfo extends Component {
  render() {
    return (
      <main style={page.container}>
      <br/><br/><br/><br/>
      <h3 style={page.sectionTitle}>
        Please contact me at athomasgarrett@gmail.com with any questions you may have.
      </h3>
      <br/>
      <h3 style={page.sectionTitle}>Thank you!</h3>
     </main>
    );
  }
}

export default ContactInfo
