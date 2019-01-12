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
          <div style={{float: "right"}}>
            <LogoBar 
              type="button" 
              site='own_up' 
              logoValues={[0,1]}
              />
          </div>
          <h3 style={page.sectionTitle}>About This Project</h3><br/>
          <p>
           
          </p>
        </section>

        <section id="ownup">
          <SlideShow side="left" picValues={[11,12,13,14,15,16]}/>
            <h3 style={page.sectionTitle}>
              Version 1
            </h3>
          <br/>
          <p style={page.paragraphWithImg}>
            
            <br/><br/>
            
            <br/><br/>
            
            <br/><br/>
            <LogoBar logoValues={[0,1,2,3,4,5,7]}/>
          </p>
        </section>
      </main>
    );
  }
}

export default OwnUp;

//web: ""
//git: ""