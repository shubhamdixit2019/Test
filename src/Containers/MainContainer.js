import React, { Component } from 'react';
import '../App.css';
import List from '../Components/List';
import Header from '../Components/Header';
import AddTodo from '../Components/AddTodo'
import FilterSearch from '../Components/FilterSearch'
import Counter from '../Components/Counter/Counter'
import { connect } from 'react-redux'
import { remove, filterSearch } from '../Actions/AddTodoAction'

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  // handleSearch = (searchWord) => event => {
  //   event.preventDefault(); 
  //   this.setState({
  //     searchWordApp: searchWord
  //   })
  //   this.props.filterSearch(searchWord);
  //}

  handleDelete = (index) => event => {
    event.preventDefault(); 
    this.props.remove(index);
  }

  correctList() {
    let list = this.props.searchWordApp === '' ? this.props.items : this.props.filteredList;
    return list;
  }

  render() {
    return (
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
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.todo.items,
    filteredList: state.todo.filteredList,
    searchWordApp: state.todo.searchWordApp
  };
}
const mapDispatchToProps = dispatch => {
  return {
    //Index will be sent
    remove: (payload) => { dispatch(remove(payload)) },
    filterSearch: (payload) => { dispatch(filterSearch(payload)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);