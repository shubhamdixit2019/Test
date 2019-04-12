
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, filterSearch } from '../Actions/AddTodoAction'
import '../App.css';
import './Header'

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onSubmit = () => {
    this.props.addTodo({ term: this.state.term });
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.term} onChange={this.onChange} />
        <button onClick={this.onSubmit}>
          Submit
				</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.todo.items
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (payload) => { dispatch(addTodo(payload)) },
    filterSearch: (payload) => { dispatch(filterSearch(payload)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);