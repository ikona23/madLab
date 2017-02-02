import React from 'react'
import {Button} from 'react-materialize'

class Addon extends React.Component {
  render() {
    const isAvailable=this.props.details.status === 'available'
    const buttonText=isAvailable ? 'Add to order' : 'Sold Out'
    return(
      <li className="menuAddon">
        {this.props.details.addName} <br/>
        <img src={this.props.details.addImage} alt={this.props.details.addName} />
        <p>{this.props.details.addDesc}</p>
          <Button disabled={!isAvailable} type="submit">{buttonText}</Button>
      <hr/>
        <p>{this.props.details.price}</p>
      </li>
    )
  }
}

export default Addon
