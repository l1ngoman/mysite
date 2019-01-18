import React, { Component } from 'react';
import PageTitle from '../../components/pageTitle'
import LogoBar from '../../components/logoBar'
import SlideShow from '../../components/slideShow'
import { page } from '../../styles/Main'


class MySite extends Component {
  render() {
    return (
      <main style={page.container}>
        <PageTitle title="My Portfolio Site" />
        <br/>
        <section id="about">
          <div style={{float: "right"}}>
            <LogoBar 
              type="button" 
              site='my_site' 
              logoValues={[0,1]}
              />
          </div>
          <h3 style={page.sectionTitle}>About This Project</h3><br/>
          <p style={page.paragraph}>
            {}<br/><br/>
          </p>
        </section>

        <section id="my_Site">
          <h3 style={page.sectionTitle}>
            My Website
          </h3>
          <br/>
          <p style={page.paragraphWithImg}>
            {}
            <br/><br/>
            {}
            <br/><br/>
            {}
            <br/><br/>
          </p>
        </section>
        <LogoBar logoValues={[0,1,4,5]}/>
      </main>
    );
  }
}

export default MySite;
