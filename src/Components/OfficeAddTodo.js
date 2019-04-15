
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { officeaddTodo, officefilterSearch } from '../Actions/AddTodoAction'
import '../App.css';
import './Header'

class OfficeAddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onChange = (event) => {    
    this.setState({ term: event.target.value })    
  }

  onSubmit = (event) => {
    event.preventDefault();    
    this.props.officeaddTodo({ term: this.state.term });
  }

  render() {
    return (
      <div className="App">
       <form onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange} />
        <button onClick={this.onSubmit}>
          Submit
				</button>
        </form>
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
    officeaddTodo: (payload) => { dispatch(officeaddTodo(payload)) },
    officefilterSearch: (payload) => { dispatch(officefilterSearch(payload)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OfficeAddTodo);