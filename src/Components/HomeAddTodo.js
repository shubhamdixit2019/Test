
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { homeaddTodo, homefilterSearch } from '../Actions/AddTodoAction'
import '../App.css';
import './Header'

class HomeAddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

<<<<<<< HEAD
  onChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log("this.props.item===============================+++>",this.props.items,this.state.term);
    if(this.props.items.Contains(this.state.term))
    {
    this.props.homeaddTodo({ term: this.state.term });
    }
=======
  onChange = (event) => {    
    this.setState({ term: event.target.value })    
  }

  onSubmit = (event) => {
    event.preventDefault();      
    this.props.homeaddTodo({ term: this.state.term });
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
  }

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <form onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button onClick={this.onSubmit}>
            Submit
=======
       <form onSubmit={this.onSubmit}>
        <input value={this.state.term} onChange={this.onChange} />
        <button onClick={this.onSubmit}>
          Submit
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
				</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.todo.homeitems
  };
}

const mapDispatchToProps = dispatch => {
  return {
    homeaddTodo: (payload) => { dispatch(homeaddTodo(payload)) },
    homefilterSearch: (payload) => { dispatch(homefilterSearch(payload)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeAddTodo);