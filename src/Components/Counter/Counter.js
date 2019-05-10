<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'
=======
import React from 'react';
import { connect } from 'react-redux';
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
import {
  increment,
  decrement,
  asyncIncrement
}
<<<<<<< HEAD
  from '../../Actions/counterActions'
import '../../App.css'

class Counter extends React.Component {
  render () {
    return (
      <div className='App'>
=======
  from '../../Actions/counterActions';
import '../../App.css'

class Counter extends React.Component {

  render() {
    return (
      <div className="App">
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
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

<<<<<<< HEAD
function mapStateToProps (state) {
  // Object comes up!
  return {
    count: state.count.count
  }
=======
function mapStateToProps(state) {
  // Object comes up!
  return {
    count: state.count.count
  };
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
}

const mapDispatchToProps = dispatch => {
  return {
    decrement: () => { dispatch(decrement()) },
    increment: () => { dispatch(increment()) },
    asyncIncrement: () => { dispatch(asyncIncrement()) }
<<<<<<< HEAD
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
=======
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
