import React from 'react';
import { getName } from '../helpers'
import { getNow } from '../helpers'
import {Button, Icon} from 'react-materialize';


class StorePicker extends React.Component{
  render(){
  return (
    <form className="storeSelector">
          <h4 className='time'>{getNow()}</h4>
      <h4>Please choose a store</h4>
        <li>{getName()}</li>
        <br/>
        <hr/>
      <input type="text" defaultValue={getName()} />
      <br/>
      <Button type="submit">Visit Store</Button>
    </form>
  )
  }
}


export default StorePicker
