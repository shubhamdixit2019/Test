import React from 'react'
import { connect } from 'react-redux'
import {
  increment,
  decrement,
  asyncIncrement
}
  from '../../Actions/counterActions'
import '../../App.css'

class Counter extends React.Component {
  render () {
    return (
      <div className='App'>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.asyncIncrement}>Async+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  // Object comes up!
  return {
    count: state.count.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decrement: () => { dispatch(decrement()) },
    increment: () => { dispatch(increment()) },
    asyncIncrement: () => { dispatch(asyncIncrement()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
