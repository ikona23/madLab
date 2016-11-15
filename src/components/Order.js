import React from 'react';

class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <hr/>
        <h2 className="orderHeader">Order Item</h2>
        <input type="text" require placeholder="Item name"/>
        <button type="submit">Go to item</button>
      </div>
    )
  }
}

export default Order
