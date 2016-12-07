import React from 'react'
import logo from '../img/regal_logo.png'
import { timeTo } from '../helpers'

const Header = (props) => {
    return (
      <header className="top">
          <img src={logo} className="headerLogo" alt="logo" />
        <h3 className="header">menumaker{timeTo}</h3>
        <h3 className="time">{timeTo}</h3>
        <h3 className="tagline">{props.tagline}</h3>
        <hr />
      </header>
    )
  }

export default Header;
