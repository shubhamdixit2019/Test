import React, { Component } from 'react';
import '../App.css';
import List from '../Components/List';
import Header from '../Components/Header';
import OfficeAddTodo from '../Components/OfficeAddTodo'
import HomeAddTodo from '../Components/HomeAddTodo'
import OfficeFilterSearch from '../Components/OfficeFilterSearch'
import HomeFilterSearch from '../Components/HomeFilterSearch'
import Counter from '../Components/Counter/Counter'
import { connect } from 'react-redux'
import { homeremove, officeremove, filterSearch } from '../Actions/AddTodoAction'

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  officehandleDelete = (item) => event => {
    event.preventDefault();
    //this.props.officeremove(index);
    this.createItemsAtBackend(item);
    this.props.officeremove(item);
  }

  createItemsAtBackend(item){
    fetch('http://localhost:9000/todo-items/', {      
      method: 'DELETE',
      headers: {        
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body : `name=${item}&listId=1`,
    }) 
  }

  homehandleDelete = (index) => event => {
    event.preventDefault();
    this.props.homeremove(index);
  }

  officecorrectList() {
    let list = this.props.searchWordApp === '' ?
     this.props.items : this.props.filteredList;
    return list;
  }

  homecorrectList() {
    let list = this.props.homesearchWordApp === '' ?
     this.props.homeitems : this.props.homefilteredList;
    return list;
  }

  render() {
    return (
      <div >
        <div className="Stack">
        <div>
        <h2 className = "App">Welcome</h2>
          <OfficeAddTodo
          />
          <OfficeFilterSearch
            handleSearch={this.handleSearch} />
          <List items={this.officecorrectList()}
            handleDelete={this.officehandleDelete} />
          {/* <Counter /> */}
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
    homeitems: state.todo.homeitems,
    homefilteredList: state.todo.homefilteredList,
    homesearchWordApp: state.todo.homesearchWordApp
  };
}
const mapDispatchToProps = dispatch => {
  return {
    //Index will be sent
    officeremove: (payload) => { dispatch(officeremove(payload)) },
    homeremove: (payload) => { dispatch(homeremove(payload)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);