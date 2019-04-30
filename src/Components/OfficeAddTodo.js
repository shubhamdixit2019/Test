
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { officeaddTodo, officefilterSearch } from '../Actions/AddTodoAction'
import '../App.css';
import './Header'

class OfficeAddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      apiResponse: ""
    };
  }
  callAPI() {
    fetch("http://localhost:9000/todo-lists")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))

  }

  componentWillMount() {
    this.callAPI();
  }

  onChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.createItemsAtBackend();
    this.props.officeaddTodo({ term: this.state.term });
  }

  createItemsAtBackend(){
    fetch('http://localhost:9000/todo-items/', {
      mode: 'no-cors',
      method: 'POST',
      headers: {        
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body : `name=${this.state.term}&listId=1`,
    }) 
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button onClick={this.onSubmit}>
            Submit
				</button>
          <p>{this.state.apiResponse}</p>
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