import React from 'react';
import { getName } from '../helpers'
import { getNow } from '../helpers'
import logo from '../logo.svg'
import {Button} from 'react-materialize'


class StorePicker extends React.Component{

  gotToStore(event){
    event.preventDefault()
    console.log('change url')
    console.log(`going to ${storeId}`);
    const storeId = this.storeInput.value
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render(){

  return (
    <form className="storeSelector" onSubmit={this.gotToStore.bind(this)}>
      <h3>menumaker</h3>
      <img src={logo} className="App-logo" alt="logo" />
        <h4 className='time'>{getNow()}</h4>
        <h4>Please choose a Restaurant</h4>
          <input type="text" defaultValue={getName()} ref={(input) => {this.storeInput = input}}/>
        <br/>
      <Button type="submit">Enter Restaurant</Button>
    </form>
  )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker
