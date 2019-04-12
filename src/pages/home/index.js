import React, { Component } from 'react'
import PageTitle from '../../components/pageTitle'
import WideButton from '../../components/wideButton.js'
import LogoBar from '../../components/logoBar'
import { page } from '../../styles/Main'
import { img, nav, home, section, indent, langs, labels } from './styles'
import content from '../../content'

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      pageIndex: 0
    }
  }
  render() {
    let { pageIndex } = this.state;
    return (
      <main style={page.container}>
        <div>
          <div style={{height: "8vh"}}></div>
          <section style={nav}>
            <WideButton id={0} title={"About"} handleClick={this.handleClick} />
            <WideButton id={1} title={"Technologies"}handleClick={this.handleClick} />
            <WideButton id={2} title={"Experience"} handleClick={this.handleClick} />
          </section>
          <section style={{display: "flex", justifyContent: "center"}}>
            <p style={home}>
              <br/>
              {pageIndex == 0 &&
                <section style={window.innerWidth < 680 ? section.small : section.large}>
                  <br/>
                  <p style={indent}>
                    <img style={img} src="./images/bio_pic.jpg"/>
                    {content.paragraphs.home.about[0]}
                  </p>
                  <br/>
                  <p style={indent}>{content.paragraphs.home.about[1]}</p>
                  <br/>
                  <p style={indent}>{content.paragraphs.home.about[2]}</p>
                  <br/>
                  <p style={indent}>{content.paragraphs.home.about[3]}</p>
                </section>}

              {pageIndex == 1 &&
                <section style={window.innerWidth < 680 ? section.small : section.large}>
                  <div style={window.innerWidth < 680 ? langs.small : langs.large}>
                    <div style={window.innerWidth < 680 ? labels.small : labels.large}>
                      Languages:
                    </div>
                    <LogoBar logoValues={[1,4,5,17,2,8]} size={0}/>
                  </div>
                  <div style={window.innerWidth < 680 ? langs.small : langs.large}>
                    <div style={window.innerWidth < 680 ? labels.small : labels.large}>
                      Frameworks/CMS:
                    </div>
                    <LogoBar logoValues={[0,24,3,32,33]} size={0}/>
                  </div>
                  <div style={window.innerWidth < 680 ? langs.small : langs.large}>
                    <div style={window.innerWidth < 680 ? labels.small : labels.large}>
                      Databases:
                    </div>
                    <LogoBar logoValues={[12,9]} size={0}/>
                  </div>
                  <div style={window.innerWidth < 680 ? langs.small : langs.large}>
                    <div style={window.innerWidth < 680 ? labels.small : labels.large}>
                      Editors/IDEs:
                    </div>
                    <LogoBar logoValues={[14,18,13,19]} size={0}/>
                  </div>
                  <div style={window.innerWidth < 680 ? langs.small : langs.large}>
                    <div style={window.innerWidth < 680 ? labels.small : labels.large}>
                      Version Control:
                    </div>
                    <LogoBar logoValues={[11,20,22,21,23]} size={0}/>
                  </div>
                  <div style={window.innerWidth < 680 ? langs.small : langs.large}>
                    <div style={window.innerWidth < 680 ? labels.small : labels.large}>
                      Methodologies:
                    </div>
                    <LogoBar logoValues={[29,27,28,26,30,31]} size={0}/>
                  </div>
                </section>}

              {pageIndex == 2 &&
                <section style={window.innerWidth < 680 ? section.small : section.large}>
                  <br/>
                  <h2>The 5th Ingredient, LLC</h2>
                  <hr/>
                  <h4>Software Developer</h4>
                  <p style={indent}>{content.paragraphs.home.resume[0]}</p>
                  <br/>
                  <h4>Software Development Internship</h4>
                  <p style={indent}>{content.paragraphs.home.resume[1]}</p>
                  <br/><br/>
                  <h2>LEARN Academy</h2>
                  <hr/>
                  <p style={indent}>{content.paragraphs.home.resume[2]}</p>
                  <br/><br/>
                  <h2>Volunteer Work</h2>
                  <hr/>
                  <p style={indent}>{content.paragraphs.home.resume[3]}</p>
                </section>}
            </p>
          </section>
        </div>
      </main>
    );
  }

  handleClick = (id) => {
    this.setState({pageIndex: id})
  }
}


export default Home;
