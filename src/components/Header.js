import React from 'react';
import logo from '../logo.svg'

const Header = (props) => {
    return (
      <header className="top">
          <img src={logo} className="headerLogo" alt="logo" />
        <h3 className="header">menumaker</h3>
        <h3 className="tagline">{props.tagline}</h3>
        <hr />
      </header>
    )
  }

export default Header;
