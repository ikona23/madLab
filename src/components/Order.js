import React from 'react';

class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <h2 className="orderHeader">Order Item</h2>
        <input type="text" className="lineInput" placeholder="Item name"/>
        <button type="submit">Go to item</button>
      </div>
    )
  }
}

export default Order
