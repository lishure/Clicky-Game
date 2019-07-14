// sets up the reusable Navbar component
import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className="score">
          <p3>Your Score: {this.props.score}</p3>
        </div>
      </nav>
    )
  }
}

export default Navbar
