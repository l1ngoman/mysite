import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { centerY,centerX } from './styles/Positioning'
import theme from './styles/Color'

import Home from './pages/home'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  constructor(props){
    super(props)

    this.styles = {
      background: {
        backgroundImage: "url(https://images.unsplash.com/photo-1519219788971-8d9797e0928e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1328&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",

      },
      page: {
        color: theme.text.primary,
        minHeight: "80vh"
      }
    }
  }
  render() {
    const { background,page } = this.styles
    return (
      <main style={background}>
        <div style={page}>
        <Header />
        <article style={centerY}>
          <Router>
            <Switch>
              <Route exact path='/projects' component={Projects}/>
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
