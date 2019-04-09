import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './Action';
import '../../App.css'

class Counter extends React.Component {

  render() {
    return (
      <div className="App">
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

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = dispatch => {
  return {
    decrement: () => {
      dispatch({ type: 'DECREMENT' });     
      
    },
    increment: () => {
      dispatch({ type: 'INCREMENT' });      
    },
    asyncIncrement: () => {
       dispatch({ type: 'ASYNCINCREMENT' });      
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);