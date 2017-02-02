import React from 'react';
import { getName } from '../helpers'
import { getNow } from '../helpers'
import logo from '../img/regal_logo.png'
import {Button} from 'react-materialize'

class StorePicker extends React.Component{

  gotToStore(event){
    event.preventDefault()
    const storeId = this.storeInput.value
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render(){

  return (
    <form className="storeSelector" onSubmit={this.gotToStore.bind(this)}>
      <h3>menumaker</h3>
      <img src={logo} className="App-logo" alt="logo" />
        <h7 className='time'>{getNow()}</h7>
        <h5>Please choose a Branch</h5>
          <input type="text" defaultValue={getName()} ref={(input) => {this.storeInput = input}}/>
        <br/>
      <Button type="submit">Setup Menu</Button>
    </form>
  )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker
