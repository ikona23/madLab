import React from 'react'
import {Button} from 'react-materialize'

class Drink extends React.Component {
  render() {
    const isAvailable = this.props.details.status === 'available'
    const buttonText = isAvailable ? 'Add to order' : 'Sold Out'
    return(
      <li className="menuBurger">
        <img src={this.props.details.image} alt=
        {this.props.details.drinkName} />
        <p>{this.props.details.drinkDesc}</p>
          <Button disabled={!isAvailable} type="submit" class='button'>{buttonText}</Button>
      <hr/>
        <p>{this.props.details.status}</p>

      </li>
    )
  }
}

export default Drink
