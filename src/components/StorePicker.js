import React from 'react';
import { getName } from '../helpers'


class StorePicker extends React.Component{
  render(){
  return (
    <form className="storeSelector">
      <h2>Please enter a store</h2>
        <li>{getName()}</li>
        <br/>
        <hr/>
      <input type="text" defaultValue={getName()} />
      <br/>
      <button type="submit">Visit Store</button>
    </form>
  )
  }
}


export default StorePicker
