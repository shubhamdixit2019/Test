import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  USERS_BACKEND
} from '../Constants/Constants'
import {
  createUserFailure,
  createUserPending,
  createUserSuccess
} from '../Actions/DisplayAPIAction'

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

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.term !== nextState.term) {
      return true;
    }
    return false;
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.createUser();
  }

  createUser() {
    fetch(USERS_BACKEND, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `name=${this.state.term}`
    }).then((res) => {
      (res.ok && res.status === 200)
        ? createUserSuccess()
        : createUserFailure({ error: res.status })
    })
      .catch((err) => createUserFailure({ error: err }))
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
        <div>
          {
            <p> {this.props.result} {this.props.isCreatePending}
             {this.props.createErrorMesssage}</p>
          }
        </div>
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
    createUserPending: () => { dispatch(createUserPending()) },
    createUserFailure: (payload) => { dispatch(createUserFailure(payload)) }
  }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(CreateUser);