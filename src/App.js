import React from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { Router } from '@reach/router'
import NavBar from './components/NavBar'

class App extends React.Component {
  state = {
    navBarItems: [
      { name: 'home', label: 'HOME', link: '/' },
      { name: 'about', label: 'ABOUT', link: '/about' },
      { name: 'portoflio', label: 'PORTFOLIO', link: '/portfolio' },
      { name: 'contact', label: 'CONTACT', link: '/contact' },
    ],
  }

  render() {
    return (
      <div className='App'>
        <NavBar sideBarItems={this.state.navBarItems} />
        <Router className='routeDiv'>
          <Home path='/' />
          <About path='/about' />
          <Portfolio path='portfolio' />
          <Contact path='/contact' />
        </Router>
      </div>
    )
  }
}

export default App
