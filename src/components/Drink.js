import React from 'react'
import {Button} from 'react-materialize'

class Drink extends React.Component {
  render() {
    const isAvailable = this.props.details.status === 'available'
    const buttonText = isAvailable ? 'Add to order' : 'Sold Out'
    return(
      <li className="menuDrinks">
        {this.props.details.drinkName} <br/>
        <img src={this.props.details.drinkImage} alt=
{this.props.details.drinkName} />
        <p>{this.props.details.drinkDesc}</p>
          <Button disabled={!isAvailable} type="submit">{buttonText}</Button>
      <hr/>
        <p>{this.props.details.price}</p>
      </li>
    )
  }
}

export default Drink
