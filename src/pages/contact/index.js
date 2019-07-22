import React, { Component } from 'react';
import ContactForm from './contactForm.js'
import { page } from '../../styles/Main'

class ContactInfo extends Component {
  render() {
    return (
      <main style={page.container}>
        <ContactForm />
     </main>
    );
  }
}

export default ContactInfo


// <br/><br/><br/><br/>
// <h2 style={page.sectionTitle}>
//   Please contact me at athomasgarrett@gmail.com with any questions you may have.
// </h2>
// <br/>
// <h2 style={page.sectionTitle}>Thank you!</h2>
