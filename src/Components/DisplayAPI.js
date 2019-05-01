import React, { Component } from 'react'
import { connect } from 'react-redux'
import { API_LINK } from '../Constants/Constants'
import {
  fetchListSuccess,
  fetchListRequest,
  fetchListFailure
} from '../Actions/DisplayAPIAction'

class DisplayAPI extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  getData() {
    fetch(API_LINK)
      .then((Response) => {
        Response.json()
          .then((findresponse) => {
            this.setState({ data: findresponse })
          })
          .catch(() => this.props.fetchListFailure('ERROR ENCOUNTERED'))
      })
  }

  componentDidMount() {
    this.props.fetchListRequest('Please Wait...Data Loading...')
    this.getData()
  }

  passDataToReducer() {
    if (this.state.data != null) {
      this.props.fetchListSuccess(this.state.data)
    }
  }

  render() {
    this.passDataToReducer()
    return (
      <div className='App' >
        {
          this.props.data
            ? this.props.data.map((item) =>
              <div>
                <table className='center'>
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
            : <h1>{this.props.status}</h1>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
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
  }
}

export default (connect)(mapStateToProps, mapDispatchToProps)(DisplayAPI)