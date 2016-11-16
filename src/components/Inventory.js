import React from 'react'

class Inventory extends React.Component {
    render() {
      return (
        <div className="inventory">
          <hr/>
          <h2 className="inverntoryHeader">Inventory</h2>
          <input type="text" placeholder="Item name"/>
          <button type="submit">Find the item</button>
        </div>
      )
    }
  }


export default Inventory
