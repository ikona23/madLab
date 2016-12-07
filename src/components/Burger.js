import React from 'react'

class Burger extends React.Component {
  render() {
    return(
      <li className="menuBurger">
        <img src={this.props.details.image} alt=
        {this.props.details.name} />
      </li>
    )
  }
}

export default Burger
