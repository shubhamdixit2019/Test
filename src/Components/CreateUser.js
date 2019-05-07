import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createUserFailure,
  createUserPending,
  createUserSuccess
} from '../Actions/DisplayAPIAction'

class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      term: ''
    }
  }

  onChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.term !== nextState.term) {
      return true;
    }
    return false;
  }

  onSubmit = (event) => {    
    event.preventDefault();
    console.log("iNside submit")
    this.props.createUserPending(this.state.term);
  }


  render() {
    return (
      <div className='App' >        
          <form onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button onClick={this.onSubmit}>Submit</button>  
            <p>{this.props.isCreatePending} {this.props.createErrorMesssage}
            {this.props.result}</p>            {
                
            }
                   
        </form>             
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    result: state.userList.result,
    isCreatePending : state.userList.isCreatePending,
    createErrorMesssage : state.userList.createErrorMesssage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUserSuccess: () => { dispatch(createUserSuccess()) },
    createUserPending: (payload) => { dispatch(createUserPending(payload)) },
    createUserFailure: (payload) => { dispatch(createUserFailure(payload)) }
  }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(CreateUser);