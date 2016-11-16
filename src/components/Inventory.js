import React from 'react'
import NewForm from './NewForm'

class Inventory extends React.Component {
    render() {
      return (
        <div className="inventory">
          <h2 className="inverntoryHeader">Inventory</h2>
          <NewForm />
        </div>
      )
    }
  }


export default Inventory
