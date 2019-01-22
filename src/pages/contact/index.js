import React, { Component } from 'react';
import PageTitle from '../../components/pageTitle'
import RadioGroup from '../../components/RadioGroup'
import { page } from '../../styles/Main'
import contact from './styles'

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        email: "",
        phone: "",
        preferred: "",
        message: ""
      }
    }
  }
  render() {
    console.log(this.state.form);
    return (
      <main style={page.container}>
        <PageTitle title="Contact" />
        <br/><br/>
        <form name="contactForm" action="/confirmation" style={window.innerWidth < 680 ? contact.small.form : contact.large.form}>
          <label name="name" style={window.innerWidth < 680 ? contact.small.label : contact.large.label}>
            <h2 style={window.innerWidth < 680 ? contact.small.fieldName : contact.large.fieldName}>
              *Name:
            </h2>
            <input 
              name="name"
              type="text"
              style={window.innerWidth < 680 ? contact.small.input : contact.large.input}
              onChange={this.handleChange} 
              placeholder="First Last"
              required
              />
          </label>
            <br/>
          <label name="email" style={window.innerWidth < 680 ? contact.small.label : contact.large.label}>
            <h2 style={window.innerWidth < 680 ? contact.small.fieldName : contact.large.fieldName}>
              *Email:
            </h2>
            <input 
              name="email"
              type="text"
              style={window.innerWidth < 680 ? contact.small.input : contact.large.input}
              onChange={this.handleChange} 
              placeholder="text@example.com"
              required
              />
          </label>
            <br/>
          <label name="phone" style={window.innerWidth < 680 ? contact.small.label : contact.large.label}>
            <h2 style={window.innerWidth < 680 ? contact.small.fieldName : contact.large.fieldName}>
              Phone:
            </h2>
            <input 
              name="phone"
              type="text"
              style={window.innerWidth < 680 ? contact.small.input : contact.large.input}
              onChange={this.handleChange} 
              placeholder="555-555-5555"
              />
          </label>
            <br/>
          <label name="preferred" style={window.innerWidth < 680 ? contact.small.label : contact.large.label}>
            <h2 style={window.innerWidth < 680 ? contact.small.fieldName : contact.large.fieldName}>
              Preferred Contact:
            </h2>
            <RadioGroup options={["Email","Phone"]} radioValue={this.radioValue} />
          </label>
            <br/>
          <label 
            name="message" style={window.innerWidth < 680 ? contact.small.label : contact.large.label}>
            <h2 style={window.innerWidth < 680 ? contact.small.fieldName : contact.large.fieldName}>
              *Message:
            </h2>
            <textarea 
              name="message"
              style={window.innerWidth < 680 ? contact.small.message : contact.large.message}
              onChange={this.handleChange} 
              placeholder="How can I help you?"
              required
              ></textarea>
            </label>
            <br/>
          <div style={{display: "flex", justifyContent: "center"}}>
            <input 
              name="submit"
              type="submit"
              style={window.innerWidth < 680 ? contact.small.submit : contact.large.submit}
              value="SEND"
              />
          </div>
        </form>
            <p style={page.paragraph}>*Denotes required fields.</p>
      </main>
    );
  }
  componentDidMount(){
    let { form } = this.state;
   // form.preferred = 
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({form});
  }
  radioValue = (value) => {
    let { form } = this.state;
    form.preferred = value;
    this.setState({form});
  }
}

export default Contact;
