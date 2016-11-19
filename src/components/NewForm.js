import React from 'react'
import {Button} from 'react-materialize'

class NewForm extends React.Component {
    createMenuItem(event){
      event.preventDefault()
      console.log('lets make some food');
        const burger = {
          name: this.name.value,
          price: this.price.value,
          status: this.status.value,
          description: this.desc.value,
          image: this.image.value,
        }
        this.props.addBurger(burger)
        this.newFrom.reset()
    }

    render() {
      return (
        <form ref={(input)=>this.newFrom = input} className="input-field col s6" onSubmit={this.createMenuItem.bind(this)}>
            <input ref={(input) => this.name = input} type='text' placeholder='Food Name' />
            <input ref={(input) => this.price = input} type='text' placeholder='Food Price' />
            <select ref={(input) => this.status = input}>
              <option value="available">Fresh</option>
              <option value="unavailable">Sold Out!</option>
            </select>
            <textarea ref={(input) => this.desc = input} placeholder="Menu Desc"></textarea>
            <input ref={(input) => this.image = input} type='text' placeholder='Food Image' />

            <Button className='btn waves-effect waves-light' name="action" type='submit'>+Add Item</Button>
        </form>
      )
    }
  }

export default NewForm
