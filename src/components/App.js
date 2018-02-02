import React, { Component } from 'react'
import SimpleCounter from './Simple_Counter'
import VisibilityToggle from './VisibilityToggle'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <SimpleCounter />
        <hr />
        <VisibilityToggle />
      </div>
    )
  }
}

export default App
