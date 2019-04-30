import React, { Component } from 'react'
import { connect } from 'react-redux'
import { USERS_BACKEND } from '../Constants/Constants'
import {
  fetchListSuccess,
  fetchListRequest,
  fetchListFailure
} from '../Actions/DisplayAPIAction'
import List from './List';

class UserList extends Component {
  constructor () {
    super()
    this.state = {
      data: null,
      itemsList : []
     
    }
  }

  getData () {
    fetch(USERS_BACKEND)
      .then((Response) => {
        Response.json()
          .then((findresponse) => {
            this.setState({ data: findresponse })
          })
          .catch(() => this.props.fetchListFailure('ERROR ENCOUNTERED'))
      })
  }

  componentDidMount () {
    this.props.fetchListRequest('Please Wait...Data Loading...')
    this.getData()
    if( this.props.data!=null){
      this.objectToArray(this.props.data); 
    }
  }

  passDataToReducer () {
    if (this.state.data != null) {
      this.props.fetchListSuccess(this.state.data)
    }
  }

  objectToArray(value){    
    let items = [];    
    console.log("this.props.data.name============>",this.props.data);
      (this.props.data).map(element => {
        //items.push(element.name);
        this.setState({itemsList : element.name})
      });  
     
  }

  deleteItemsAtBackend=async function(item) {    
    try{
      await fetch(' http://localhost:9000/user-list/', {
        mode: 'cors',
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${item}`      
      })
    }catch(err)
    {
      console.log("Error Encountered"+err);
    }

  }

  handleDelete = (item) => event => {
    event.preventDefault();
    console.log("this.state.items",this.state.itemsList);
    this.deleteItemsAtBackend(item);
//      
    // this.props.remove(item);
  }


  render () {
    this.passDataToReducer()        
    return (
      <div className='App' >
        {
          this.props.data ?
            <List items={this.state.itemsList}
                handleDelete={this.handleDelete}
            />     
            : <h1>{this.props.status}</h1>
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state.userList.data,
    status: state.userList.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchListSuccess: (payload) => { dispatch(fetchListSuccess(payload)) },
    fetchListRequest: (payload) => { dispatch(fetchListRequest(payload)) },
    fetchListFailure: (payload) => { dispatch(fetchListFailure(payload)) }
  }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(UserList)
