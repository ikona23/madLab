import React from 'react'
import {Button} from 'react-materialize'

class Burger extends React.Component {
  render() {
    const isAvailable = this.props.details.status === 'available'
    const buttonText = isAvailable ? 'Add to order' : 'Sold Out'
    return(
      <li className="menuBurger">
        <img src={this.props.details.image} alt=
        {this.props.details.name} />
        <p>{this.props.details.desc}</p>
          <Button disabled={!isAvailable} type="submit" class='button'>{buttonText}</Button>
      <hr/>
        <p>{this.props.details.status}</p>
        <p>{this.props.details.price}</p>
      </li>
    )
  }
}

export default Burger
