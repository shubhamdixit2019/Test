<<<<<<< HEAD
import React, { Component } from 'react'
=======
import React, { Component } from 'react';
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
import { connect } from 'react-redux'
import { API_LINK } from '../Constants/Constants'
import {
  fetchListSuccess,
  fetchListRequest,
  fetchListFailure
} from '../Actions/DisplayAPIAction'

class DisplayAPI extends Component {
<<<<<<< HEAD
  constructor () {
    super()
=======
  constructor() {
    super();
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
    this.state = {
      data: null
    }
  }

<<<<<<< HEAD
  getData () {
    fetch(API_LINK)
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
  }

  passDataToReducer () {
    if (this.state.data != null) {
      this.props.fetchListSuccess(this.state.data)
    }
  }

  render () {
    this.passDataToReducer()
    return (
      <div className='App' >
        {
          this.props.data
            ? this.props.data.map((item) =>
              <div>
                <table className='center'>
=======
  getData() {
    fetch(API_LINK).
      then((Response) => {
        Response.json().
          then((findresponse) => {
            this.setState({ data: findresponse });
          }).
          catch(() => this.props.fetchListFailure("ERROR ENCOUNTERED"));
      })
  }

  componentDidMount() {
    this.props.fetchListRequest("Please Wait...Data Loading...");
    this.getData();
  }

  passDataToReducer() {
    if (this.state.data != null) {
      this.props.fetchListSuccess(this.state.data);
    }
  }

  render() {
    this.passDataToReducer();
    return (
      <div className="App" >
        {}
        {
          this.props.data ?
            this.props.data.map((item) =>
              <div>
                <table className="center">
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
                  <tr>
                    <td>{item.first}</td>
                    <td>{item.last}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.created}</td>
                    <td>{item.balance}</td>
                  </tr>
                </table>
              </div>
            )
<<<<<<< HEAD
            : <h1>{this.props.status}</h1>
        }
      </div>
    )
  }
}

function mapStateToProps (state) {
=======
            :
            <h1>{this.props.status}</h1>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
  return {
    data: state.displayAPI.data,
    status: state.displayAPI.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchListSuccess: (payload) => { dispatch(fetchListSuccess(payload)) },
    fetchListRequest: (payload) => { dispatch(fetchListRequest(payload)) },
    fetchListFailure: (payload) => { dispatch(fetchListFailure(payload)) }
<<<<<<< HEAD
  }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(DisplayAPI)
=======
  };
}

export default (connect)(mapStateToProps, mapDispatchToProps)(DisplayAPI);
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
