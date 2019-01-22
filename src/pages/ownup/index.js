import React, { Component } from 'react';
import PageTitle from '../../components/pageTitle'
import LogoBar from '../../components/logoBar'
import SlideShow from '../../components/slideShow'
import content from '../../content'
import { page } from '../../styles/Main'

class OwnUp extends Component {
  render() {
    return (
      <main style={page.container}>
        <PageTitle title="Own-Up Grown-Up" />
        <br/>
        <section id="about">
          
            <div style={{float: "left"}}>
            <LogoBar 
              type="button" 
              site='own_up' 
              logoValues={[0,1]}
              size={0}
              />
            </div>
          <h3 style={page.sectionTitle}>
              About This Project
          </h3><br/>
          <p style={page.paragraph}>
           {content.paragraphs.own_up[0]}
           <br/><br/>
          </p>
        </section>

        <section id="ownup">
          <SlideShow side="left" picValues={[11,12,13,14,15,16]}/>
          <h3 style={page.sectionTitle}>
            Version 1.0
          </h3>
          <br/>
          <p style={page.paragraphWithImg}>
            {content.paragraphs.own_up[1]}
            <br/><br/>
            {content.paragraphs.own_up[2]}
            <br/><br/>
            {content.paragraphs.own_up[3]}
            <br/><br/>
          </p>
          <h3 style={page.sectionTitle}>
              Version 2.0
          </h3>
          <br/>
          <p style={page.paragraph}>
            {content.paragraphs.own_up[4]}
          </p>
          <br/>
          <LogoBar logoValues={[0,1,2,3,12,10,4,5,7]}  size={0}/>
        </section>
      </main>
    );
  }
}

export default OwnUp;

//web: ""
//git: ""