import React, { Component } from 'react';
import PageTitle from '../../components/pageTitle'
import LogoBar from '../../components/logoBar'
import SlideShow from '../../components/slideShow'
import content from '../../content'
import { page } from '../../styles/Main'

class NasaNeo extends Component {
  render() {
    return (
      <main style={page.container}>
        <PageTitle title="Nasa Neo API" />
        <br/>
        <section id="about">
          <div style={{float: "right"}}>
            <LogoBar 
              type="button" 
              site='nasa_neo' 
              logoValues={[0,1]}
              />
          </div>
          <h3 style={page.sectionTitle}>About This Project</h3><br/>
          <p>
            {content.paragraphs.nasa_neo[0]}<br/><br/>
          </p>
        </section>

        <section id="nasa_neo">
          <SlideShow side="left" picValues={[6,7,8]}/>
            <h3 style={page.sectionTitle}>
              Nasa Neo API
            </h3>
          <br/>
          <p style={page.paragraphWithImg}>
            {content.paragraphs.nasa_neo[1]}
            <br/><br/>
            {content.paragraphs.nasa_neo[2]}
            <br/><br/>
            {content.paragraphs.nasa_neo[3]}
            <br/><br/>
            <LogoBar logoValues={[0,1,4,5,6]}/>
          </p>
        </section>
      </main>
    );
  }
}

export default NasaNeo;

//web: ""
//git: ""