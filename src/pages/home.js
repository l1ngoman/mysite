import React, { Component } from 'react'
import PageTitle from '../components/pageTitle'
import WideButton from '../components/wideButton.js'
import LogoBar from '../components/logoBar'
import { page } from '../styles/Main'
import content from '../content'
import theme from '../styles/Theme'

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      pageIndex: 1
    }
  }
  render() {
    let { pageIndex } = this.state;
    return (
      <main style={page.container}>
        <PageTitle title="Home" />

        <div>
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
                  <p style={indent}>{content.paragraphs.home.about[0]}</p>
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
                      Front End: 
                    </div>
                    <LogoBar logoValues={[0,1,4,5,24]} size={0}/>
                  </div>
                  <div style={window.innerWidth < 680 ? langs.small : langs.large}>
                    <div style={window.innerWidth < 680 ? labels.small : labels.large}>
                      Back End:
                    </div>
                    <LogoBar logoValues={[17,2,3,8,12,9]} size={0}/>
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
                      Approaches:
                    </div>
                    <LogoBar logoValues={[29,27,28,26,30,31]} size={0}/>
                  </div>
                </section>}

              {pageIndex == 2 && 
                <section style={window.innerWidth < 680 ? section.small : section.large}>
                  <br/>
                  <h2>The 5th Ingredient</h2>
                  <hr/>
                  <p style={indent}>{content.paragraphs.home.resume[0]}</p>
                  <br/><br/>
                  <h2>LEARN Academy</h2>
                  <hr/>
                  <p style={indent}>{content.paragraphs.home.resume[1]}</p>
                  <br/><br/>
                  <h2>Volunteer Work</h2>
                  <hr/>
                  <p style={indent}>{content.paragraphs.home.resume[2]}</p>
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

const nav = {
  display: "flex", 
  justifyContent: "center",
}
const home = {
  display: "flex", 
  justifyContent: "center",
  width: "75%", 
  color: theme.text.light,
  textShadow: `1px 1px ${theme.text.shadow}`,
}
const indent = {
  textIndent: "20px"
}
const langs = {
  large: {
    display: "flex", 
    alignItems: "center",

  },
  small: {
    display: "flex", 
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.text.primary,
    border: `1px solid ${theme.text.dark}`
  }
}
const section = {
  large: {
    minWidth: "650px"
  },
  small: {
    width: "400px"
  }
}
const labels = {
  large: {
    width: "150px",
    fontSize: "20px"
  },
  small: {
    display: "flex",
    justifyContent: "center",
    width: "150px",
    fontSize: "20px",
  }
}

export default Home;
