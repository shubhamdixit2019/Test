import React, { Component } from 'react';
import { connect } from 'react-redux'
import { remove } from '../Actions/AddTodoAction'
import '../App.css';
import List from '../Components/List';
import Header from '../Components/Header';
import AddTodo from '../Components/AddTodo'
import FilterSearch from '../Components/FilterSearch'
import Counter from '../Components/Counter/Counter'

class MainContainer extends Component {
  handleDelete = (index) => event => {
    event.preventDefault();

    this.props.remove({ index: index });
  }

  correctList() {
    let list = this.props.searchWordApp === '' ?
      this.props.items : this.props.filteredList;
    return list;
  }

  render() {
    return (
      <div >
        <div className="Stack">
          <div>
            <Header />
            <AddTodo
            />
            <FilterSearch
              handleSearch={this.handleSearch} />
            <List items={this.correctList()}
              handleDelete={this.handleDelete} />
            <Counter />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.todo.items,
    filteredList: state.todo.filteredList,
    searchWordApp: state.todo.searchWordApp,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    remove: (payload) => { dispatch(remove(payload)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);