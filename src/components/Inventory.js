import React from 'react'
import NewForm from './NewForm'
import {Button} from 'react-materialize'

class Inventory extends React.Component {

    render() {
      return (
        <div className="inventory">
          <h2 className="inverntoryHeader">Inventory</h2>
          <NewForm addBurger={this.props.addBurger}/>
          <br/>
          <Button onClick={this.props.loadSamples}>Load Sample</Button>
        </div>
      )
    }
  }


export default Inventory
