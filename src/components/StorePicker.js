import React from 'react';


class StorePicker extends React.Component{
  render(){
  return (
    <form className="storeSelector">
    <h2>Please enter a store</h2>
    <input type="text" require placeholder="Store Name"/>
    <button type="submit">Visit Store</button>
    </form>

  )
  }
}


export default StorePicker
