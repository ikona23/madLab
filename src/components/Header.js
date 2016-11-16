import React from 'react';

const Header = (props) => {
    return (
      <header className="top">
        <h1 className="header">company name</h1>
        <h3 className="tagline">{props.tagline}</h3>
        <hr />
      </header>
    )
  }

export default Header;
