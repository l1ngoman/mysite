import React, { Component } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import position from './styles/Positioning'
import theme from './styles/Theme'

import Header from './components/header'
import Footer from './components/footer'
import Battleship from './pages/battleship'
import Contact from './pages/contact'
import CredCheck from './pages/credCheck/index.js'
import Home from './pages/home'
import NasaNeo from './pages/nasaNeo'
import OwnUp from './pages/ownup/index.js'
import Projects from './pages/projects'

class App extends Component {
  constructor(props){
    super(props)

    this.styles = {
      page: {
        color: theme.text.primary,
        minHeight: "80vh"
      }
    }
  }
  render() {
    const { page } = this.styles
    return (
      <main style={theme.background}>
        <div style={page}>
        <Header />
        <article style={position.y}>
          <Router>
            <Switch>
              <Route exact path='/projects' component={Projects}/>
              <Route exact path='/own_up' component={OwnUp}/>
              <Route exact path='/battleship' component={Battleship}/>
              <Route exact path='/nasa_neo' component={NasaNeo}/>
              <Route exact path='/cred_check' component={CredCheck}/>
              <Route exact path='/contact' component={Contact}/>
              <Route path='/' component={Home}/>
            </Switch>
          </Router>
        </article>
        </div>
        <Footer />
      </main>
    );
  }
}

export default App;
