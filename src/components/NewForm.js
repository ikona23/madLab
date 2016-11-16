import React from 'react'

class NewForm extends React.Component {
    render() {
      return (
        <form className="editMenu">
            <input type='text' placeholder='name' />
            <input type='text' placeholder='price' />
            <input type='text' placeholder='status' />
            <input type='text' placeholder='description' />
            <input type='text' placeholder='image' />
        </form>
      )
    }
  }

export default NewForm
