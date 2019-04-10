import React from 'react';
import { connect } from 'react-redux';
import '../../App.css'
import * as Actions from  '../../Actions/counterActions';

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
    decrement:()=>{ Actions.decrement(dispatch)},
    increment: () => { Actions.increment(dispatch)},
    asyncIncrement: () => { Actions.asyncIncrement(dispatch)}
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);