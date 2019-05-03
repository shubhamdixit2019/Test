import React, { Component } from 'react'
import { connect } from 'react-redux'
import { API_LINK } from '../Constants/Constants'
import {
  fetchListSuccess,
  fetchListRequest,
  fetchListFailure
} from '../Actions/DisplayAPIAction'

class DisplayAPI extends Component {
  constructor () {
    super()
    this.state = {
      data: null
    }
  }

  getData () {
    fetch(API_LINK)
      .then((res) => {
        res.json()
          .then((response) => {            
            this.props.fetchListSuccess(response)
          })
          .catch(() => this.props.fetchListFailure('ERROR ENCOUNTERED'))
      })
  }

  componentDidMount () {
    this.props.fetchListRequest('Please Wait...Data Loading...')
    this.getData()
  }

  render () {
    
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

function mapStateToProps (state) {
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