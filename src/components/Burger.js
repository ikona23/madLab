import React from 'react'
import {Button} from 'react-materialize'

class Burger extends React.Component {
  render() {
    const {details,index} = this.props
    const isAvailable = this.props.details.status === 'available'
    const buttonText = isAvailable ? 'Add to order' : 'Sold Out'
    return(
      <li className="menuBurger">
        {this.props.details.name} <br/>
        <img src={this.props.details.image} alt=
        {this.props.details.name} />
        <p>{this.props.details.desc}</p>
          <Button disabled={!isAvailable} onClick={()=>this.props.addToOrder(index)}type="submit">{buttonText}</Button>
      <hr/><span>
        <p>{this.props.details.price}</p>
      </span>
      </li>
    )
  }
}

export default Burger
