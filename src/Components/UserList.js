import React, { Component } from 'react'
import { connect } from 'react-redux'
import { USERS_BACKEND } from '../Constants/Constants'
import {
  fetchListSuccess,
  fetchListRequest,
  fetchListFailure,
  deleteUserFailure,
  deleteUserPending,
  deleteUserSuccess
} from '../Actions/DisplayAPIAction'
import BackendList from './BackendList';

class UserList extends Component {

  getData() {
    fetch(USERS_BACKEND)
      .then((response) => {
        response.json()
          .then((res) => {
            this.props.fetchListSuccess({ list: res })
          }).catch((err) => this.props.fetchListFailure({ error: err }))
      })
  }

  componentDidMount() {
    this.props.fetchListRequest();
    this.getData();
  }

  deleteItems(id) {
    fetch(USERS_BACKEND, {
      mode: 'cors',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `id=${id}`,
    }).then((res) => {
      (res.ok && res.status === 200)
        ? this.props.deleteUserSuccess({ id: id })
        : deleteUserFailure({ error: res.status })
    }).catch((err) => deleteUserFailure({ error: err }));
  }

  handleDelete = id => event => {
    event.preventDefault();
    this.deleteItems(id);
  }

  render() {
    return (
      <div className='App' >
        {
          this.props.list ?
            <BackendList items={this.props.list}
              handleDelete={this.handleDelete} />
            : <h1>{this.props.status}</h1>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.userList.list,
    status: state.userList.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchListSuccess: (payload) => { dispatch(fetchListSuccess(payload)) },
    fetchListRequest: () => { dispatch(fetchListRequest()) },
    fetchListFailure: (payload) => { dispatch(fetchListFailure(payload)) },
    deleteUserSuccess: (payload) => { dispatch(deleteUserSuccess(payload)) },
    deleteUserFailure: (payload) => { dispatch(deleteUserFailure(payload)) },
    deleteUserPending: () => { dispatch(deleteUserPending()) }
  }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(UserList)