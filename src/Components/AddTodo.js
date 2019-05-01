
import React from 'react';
import { connect } from 'react-redux';
import { addTodo, filterSearch } from '../Actions/AddTodoAction'
import '../App.css';
import './Header'

class AddTodo extends React.Component {
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
    this.props.addTodo({ term: this.state.term });
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
    addTodo: (payload) => { dispatch(addTodo(payload)) },
    filterSearch: (payload) => { dispatch(filterSearch(payload)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);