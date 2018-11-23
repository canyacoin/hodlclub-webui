import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Media from 'react-media'
var FontAwesome = require('react-fontawesome')

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.desktopNav = this.desktopNav.bind(this)
    this.burgerNav = this.burgerNav.bind(this)
    this.burgerToggle = this.burgerToggle.bind(this)
  }

  burgerToggle() {
    let links = document.getElementsByClassName('mobileLinks')[0]
    if (links.classList.contains('hidden')) {
      links.classList.remove('hidden')
    } else {
      links.classList.add('hidden')
    }
  }

  desktopNav() {
    return (
      <div className="Nav">
        <div className="logo">
          <img height="50%" width="50%" alt="HODL Club Logo" src={require('./assets/HODL-Logo.png')} />
        </div>
        <div className="flexrow links">
          <Link to='/'>About</Link>
          <Link to='/members'>Members</Link>
          <Link to='/og-members'>OG Members</Link>
        </div>
      </div>
    )
  }

  burgerNav() {
    return (
      <div className="Nav">
        <div className="logo">
          <img height="45px" alt="HODL_CLUB" src={require('./assets/HODL-Logo.png')} />
          <a onClick={this.burgerToggle}><FontAwesome name='bars' size="2x" /></a>
        </div>
        <div className="mobileLinks hidden">
          <Link onClick={this.burgerToggle} to='/'>About</Link>
          <Link onClick={this.burgerToggle} to='/members'>Members</Link>
          <Link onClick={this.burgerToggle} to='/og-members'>OG Members</Link>
        </div>
      </div>
    )
  }
  render() {
    return (
      <Media query="(max-width: 600px)">
        {
          matches => matches ? (this.burgerNav()) : (this.desktopNav())
        }
      </Media>)
  }
}

export default Nav
