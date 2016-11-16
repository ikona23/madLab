import React from 'react'
import {Button} from 'react-materialize'

class NewForm extends React.Component {
    createMenuItem(event){
      event.preventDefault()
      console.log('lets make some food');
    }
    render() {
      return (
        <form className="editMenu" onSubmit={this.createMenuItem.bind(this)}>
            <input type='text' placeholder='Food Name' />
            <input type='text' placeholder='Food Price' />
            <select>
              <option value="available">Fresh</option>
              <option value="unavailable">Sold out!</option>
            </select>
            <textarea placeholder="Menu Desc"></textarea>
            <input type='text' placeholder='Status' />
            <input type='text' placeholder='Food Description' />
            <input type='text' placeholder='Food Image' />
            <Button type='submit'>+Add Item</Button>
        </form>
      )
    }
  }

export default NewForm
