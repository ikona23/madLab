import React from 'react'

class Burger extends React.Component {
  render() {
    return(
      <li className="menuBurger">
        {this.props.details.name}
      </li>
    )
  }
}

export default Burger
