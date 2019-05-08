import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchListUserSuccess,
  fetchListUserRequest,
  fetchListUserFailure,
  deleteUserFailure,
  deleteUserPending,
  deleteUserSuccess,
  updateUserFailure,
  updateUserSuccess,
  updateUserPending
} from '../Actions/DisplayAPIAction'
import BackendList from './BackendList';

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      editId: null,
    }
  }

  componentDidMount() {
    this.props.fetchListUserRequest();
  }

  handleEdit = id => event => {
    event.preventDefault();
    this.setState({
      editId: id
    })
  }

  handleDelete = id => event => {
    event.preventDefault();
    this.props.deleteUserPending({ id: id, list: this.props.list })
  }

  onSubmit = data => event => {
    //this is the onSubmit method of update funtionality
    event.preventDefault();
    this.props.updateUserPending({ list: this.props.list, data: data })
    this.setState({
      editId: null
    })
  }

  render() {
    const items = (this.props.list || []);
    return (
      <div className='App' >
        {
          items ?
            <BackendList items={items} editId={this.state.editId}
              handleDelete={this.handleDelete} handleEdit={this.handleEdit}
              onSubmit={this.onSubmit} />
            : <h1>{this.props.status}</h1>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.userList.list,
    status: state.userList.status,
    updateStatus: state.userList.updateStatus,
    updateIspending: state.userList.updateIspending,
    updateErrorMessage: state.userList.updateErrorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchListUserSuccess: (payload) => { dispatch(fetchListUserSuccess(payload)) },
    fetchListUserRequest: () => { dispatch(fetchListUserRequest()) },
    fetchListUserFailure: (payload) => { dispatch(fetchListUserFailure(payload)) },
    deleteUserSuccess: (payload) => { dispatch(deleteUserSuccess(payload)) },
    deleteUserFailure: (payload) => { dispatch(deleteUserFailure(payload)) },
    deleteUserPending: (payload) => { dispatch(deleteUserPending(payload)) },
    updateUserSuccess: (payload) => { dispatch(updateUserSuccess(payload)) },
    updateUserFailure: (payload) => { dispatch(updateUserFailure(payload)) },
    updateUserPending: (payload) => { dispatch(updateUserPending(payload)) }
  }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(UserList)