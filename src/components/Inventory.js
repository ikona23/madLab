import React from 'react'
import NewForm from './NewForm'

class Inventory extends React.Component {
    render() {
      return (
        <div className="inventory">
          <h2 className="inverntoryHeader">Inventory</h2>
          <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option defaultValue="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
          <NewForm addBurger={this.props.addBurger}/>
        </div>
      )
    }
  }


export default Inventory
