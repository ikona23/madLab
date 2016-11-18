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
            <div>
            <select>
              <option defaultValue="">Choose your option</option>
              <option defaultValue="1">Option 1</option>
              <option defaultValue="2">Option 2</option>
              <option defaultValue="3">Option 3</option>
            </select>
          </div>
            <textarea placeholder="Menu Desc"></textarea>
            <input type='text' placeholder='Status' />
            <input type='text' placeholder='Food Description' />
            <input type='text' placeholder='Food Image' />

            <Button className='btn waves-effect waves-light' name="action" type='submit'>+Add Item</Button>
        </form>
      )
    }
  }

export default NewForm
