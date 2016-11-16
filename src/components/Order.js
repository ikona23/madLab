import React from 'react'
import {Button} from 'react-materialize'

class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <h2 className="orderHeader">Order Item</h2>
        <input type="text" className="lineInput" placeholder="Item name"/>
        <Button type="submit">Go to item</Button>
      </div>
    )
  }
}

export default Order
