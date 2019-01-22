import React, { Component } from 'react';
import PageTitle from '../../components/pageTitle'
import LogoBar from '../../components/logoBar'
import SlideShow from '../../components/slideShow'
import { page } from '../../styles/Main'


class CredCheck extends Component {
  render() {
    return (
      <main style={page.container}>
        <PageTitle title="Credential Checker" />
        <br/>
        <section id="about">
          <div style={{float: "right"}}>
            <LogoBar 
              type="button" 
              site='cred_check' 
              logoValues={[0,1]}
              />
          </div>
          <h3 style={page.sectionTitle}>About This Project</h3><br/>
          <p style={page.paragraph}>
            {}<br/><br/>
          </p>
        </section>

        <section id="cred_check">
          <SlideShow side="left" picValues={[]}/>
            <h3 style={page.sectionTitle}>
              Credential Checker
            </h3>
          <br/>
          <p style={page.paragraphWithImg}>
            {}
            <br/><br/>
            {}
            <br/><br/>
            {}
            <br/><br/>
            <LogoBar logoValues={[]}/>
          </p>
        </section>
        <LogoBar logoValues={[8,4,5]} size={0}/>
      </main>
    );
  }
}

export default CredCheck;
