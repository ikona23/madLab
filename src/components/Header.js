import React from 'react';

class Header extends React.Component{
  render(){
      console.log(this)
    return (
    <header className="top">
      <h1 className="header">company name</h1>
      <h3 className="tagline">{this.props.tagline}</h3>
      <hr />
    </header>
    )
  }
}

export default Header;
