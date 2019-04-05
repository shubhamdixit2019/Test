import React, { Component } from 'react';
import './App.css';
import List from './Components/List';
import Header from './Components/Header';
import AddButton from './Components/AddButton'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchWord: '',
      searchItems: [],
      setTerm: '',
    };
  }

  handleSearch = event => {
    let searchedItems = [];
    // es6
    // Object constructive
    // Object destructive
    // const {term, items, searchWord, searchItems} = this.state; 

    for (let itemsIterate = 0; itemsIterate < this.state.items.length; itemsIterate++) {
      const item = this.state.items[itemsIterate];
      // CASE INSENSITIVE SEARCH
      if ((item.search((new RegExp(this.state.searchWord, "i")))) > (-1)) {
        searchedItems.push(item);
      }
    }
    this.setState({
      searchItems: searchedItems,
      searchWord: event.target.value
    });
  }

  handleDelete = (index) => {
    this.setState(this.state.items.splice(index, 1));
  }

  // onChange = (event) => {

  //   this.setState({ term: event.target.value });

  // }

  onSubmit = (term) => {
        this.setState({      
      items: [...this.state.items, term]
    });
  }

  correctList() {
    let list = this.state.searchWord === '' ? this.state.items : this.state.searchItems
    return list;
  }



  render() {
    return (
      <div>
        <AddButton
          onSubmit={this.onSubmit}
        />
        <input
            onChange={this.handleSearch}
            value={this.state.searchWord}
            className="search"
            type="text"
            placeholder="filter list" />
        
        <List items={this.correctList()} handleDelete={this.handleDelete} />
        {/* <div>
          <h1>{this.methods}</h1>
        </div> */}
      </div>
    );
  }
}

