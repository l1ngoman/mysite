import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <main className="background">
        <main>
          <header>
            <Header />
          </header>
          <div>
            <Router>
              <Switch>
                <Route exact path='/projects' component={Projects}/>
                <Route exact path='/contact' component={Contact}/>
                <Route path='/' component={Home}/>
              </Switch>
            </Router>
          </div>
          <footer>
            <Footer />
          </footer>
        </main>
      </main>
    );
  }
}

export default App;
