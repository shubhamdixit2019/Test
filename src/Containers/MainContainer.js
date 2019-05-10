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

<<<<<<< HEAD
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
=======
  officehandleDelete = (index) => event => {
    event.preventDefault();
    this.props.officeremove(index);
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
  }

  homehandleDelete = (index) => event => {
    event.preventDefault();
    this.props.homeremove(index);
  }

  officecorrectList() {
<<<<<<< HEAD
    let list = this.props.searchWordApp === '' ?
     this.props.items : this.props.filteredList;
=======
    let list = this.props.searchWordApp === '' ? this.props.items : this.props.filteredList;
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
    return list;
  }

  homecorrectList() {
<<<<<<< HEAD
    let list = this.props.homesearchWordApp === '' ?
     this.props.homeitems : this.props.homefilteredList;
=======
    let list = this.props.homesearchWordApp === '' ? this.props.homeitems : this.props.homefilteredList;
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
    return list;
  }

  render() {
    return (
      <div >
        <div className="Stack">
        <div>
<<<<<<< HEAD
        <h2 className = "App">Welcome</h2>
=======
        <h2 className = "App">Office Content</h2>
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
          <OfficeAddTodo
          />
          <OfficeFilterSearch
            handleSearch={this.handleSearch} />
          <List items={this.officecorrectList()}
            handleDelete={this.officehandleDelete} />
          {/* <Counter /> */}
<<<<<<< HEAD
        </div>        
=======
        </div>
        <div>
          <h2 className = "App" >Home Content</h2>
          <HomeAddTodo
          />
          <HomeFilterSearch
            handleSearch={this.handleSearch} />
          <List items={this.homecorrectList()}
            handleDelete={this.homehandleDelete} />
          {/* <Counter /> */}
        </div>
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
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