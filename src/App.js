import React from 'react'
import './App.css'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { Router } from '@reach/router'
import NavBar from './components/NavBar'

const App = () => {
  const navBarItems = [
    { name: 'home', label: 'HARRIET BLUNDELL', link: '/' },
    { name: 'portoflio', label: 'PORTFOLIO', link: '/portfolio' },
    { name: 'contact', label: 'CONTACT', link: '/contact' },
  ]

  return (
    <div className='App'>
      <NavBar sideBarItems={navBarItems} />
      <Router className='routeDiv'>
        <Home path='/' />
        <Portfolio path='portfolio' />
        <Contact path='/contact' />
      </Router>
    </div>
  )
}

export default App
