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
    this.state = {
      searchWordApp: ''
    };
  }

  handleSearch = (searchWord) => {
    this.setState({
      searchWordApp : searchWord
    })    
    // let searchedItems = [];
    // console.log('searchWord=================>',searchWord)
    // console.log('this.props.items============>',this.props.items);
    // for (let itemsIterate = 0;
    //   itemsIterate < this.props.items.length; itemsIterate++) {
    //   const item = this.props.items[itemsIterate];
    //   // CASE INSENSITIVE SEARCH
    //   if ((item.search((new RegExp(searchWord, "i")))) > (-1)) {
    //     searchedItems.push(item);
    //   }
    // }   

    // this.setState({
    //   searchItems: searchedItems,
    //   searchWordApp: searchWord
    // });
    //console.log('this.state.searchItems======================>',this.state.searchItems);
    this.props.filterSearch(searchWord);    
  }

  handleDelete = (index) => event => {        
    this.props.remove(index);
  }

  correctList() {   
    console.log('this.props.filteredList ============================> ',this.props.filteredList);
    console.log('this.props.items ===================================> ',this.props.items);
    let list = this.state.searchWordApp === '' ? this.props.items : this.props.filteredList;
    console.log('this.state.searchWordApp ============================> ',this.state.searchWordApp) 
    return list;
  }

  render() {    
    return (
      <div>
        <Header />
        <AddTodo
          onSubmit={this.onSubmit} />
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
    filteredList : state.todo.filteredList
  };
}
const mapDispatchToProps = dispatch => {
  return {
    //Index will be sent
    remove: (payload) => { dispatch(remove(payload)) },
    filterSearch : (payload) => { dispatch(filterSearch(payload)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);