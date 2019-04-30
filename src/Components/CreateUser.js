import React, { Component } from 'react'

class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      term: null
    }
  }

  onChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.createItemsAtBackend();
  }

  createItemsAtBackend=async function() {    
    try{
      await fetch('http://localhost:9000/create-user/', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${this.state.term}`      
      })
    }catch(err)
    {
      console.log("Error Encountered");
    }

  }

  render() {
    return (
      <div className='App' >
        <form>
          <form onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button onClick={this.onSubmit}>Submit</button>
          </form>
        </form>
      </div>
    )
  }
}

export default CreateUser;