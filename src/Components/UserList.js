import React, { Component } from 'react'
import { connect } from 'react-redux'
import { USERS_BACKEND } from '../Constants/Constants'
import {
  fetchListSuccess,
  fetchListRequest,
  fetchListFailure,
  deleteUserFailure,
  deleteUserPending,
  deleteUserSuccess,
  updateUserFailure,
  updateUserSuccess,
  updateUserPending
} from '../Actions/DisplayAPIAction'
import BackendList from './BackendList';

class UserList extends Component {
constructor(){
  super();
  this.state={
    editId : null,    
  }
}

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
        : this.props.deleteUserFailure({ error: res.status })
    }).catch((err) => this.props.deleteUserFailure({ error: err }));
  }

  updateItems(data) {
    fetch(USERS_BACKEND, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `name=${data.updatedValue}&id=${data.id}`,
    }).then((res) => {
      (res.ok )
      ?this.props.updateUserSuccess()
      :this.props.updateUserFailure({error : res.status})
    }).catch((err) => this.props.updateUserFailure({error : err}))
  }

  handleEdit = id => event => {
    event.preventDefault();
    this.setState({
      editId : id
    })  
  }

  handleDelete = id => event => {
    event.preventDefault();
    this.deleteItems(id);
  }

  onSubmit = data => event => {
    event.preventDefault(); 
    this.updateItems(data);  

  }

  render() {
    return (
      <div className='App' >
        {
          this.props.list ?
            <BackendList items={this.props.list} editId = {this.state.editId}
              handleDelete={this.handleDelete} handleEdit={this.handleEdit} 
              onSubmit={this.onSubmit}/>
            : <h1>{this.props.status}</h1>
        }
         <div>
            {
              <p>{this.props.updateStatus}</p>
            }
         </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.userList.list,
    status: state.userList.status,
    updateStatus: state.userList.updateStatus,
    updateIspending : state.userList.updateIspending,
    updateErrorMessage : state.userList.updateErrorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchListSuccess: (payload) => { dispatch(fetchListSuccess(payload)) },
    fetchListRequest: () => { dispatch(fetchListRequest()) },
    fetchListFailure: (payload) => { dispatch(fetchListFailure(payload)) },
    deleteUserSuccess: (payload) => { dispatch(deleteUserSuccess(payload)) },
    deleteUserFailure: (payload) => { dispatch(deleteUserFailure(payload)) },
    deleteUserPending: () => { dispatch(deleteUserPending()) },
    updateUserSuccess: () => { dispatch(updateUserSuccess()) },
    updateUserFailure: (payload) => { dispatch(updateUserFailure(payload)) },
    updateUserPending: () => { dispatch(updateUserPending()) }
  }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(UserList)