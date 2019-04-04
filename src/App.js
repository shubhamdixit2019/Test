import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      searchWord: '',
      searchItems: [] 
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
      if((item.search((new RegExp(this.state.searchWord, "i"))))>(-1)) { 
        searchedItems.push(item);
      }        
    }        
    this.setState({ 
      searchItems: searchedItems, 
      searchWord: event.target.value 
    });            
  }

  handleDelete = (index) => { 
    this.setState(this.state.items.splice(index,1));     
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  correctList() {
    let list = this.state.searchWord === '' ? this.state.items : this.state.searchItems 
    return list;
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
        <h1 className="HeadApp">React To-Do App</h1>
        <h2 className="HeadApp">Enhance Your Productivity</h2>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <form className="App">
        <input 
          onChange={this.handleSearch} 
          value={this.state.searchWord} 
          className="search" 
          type="text" 
          placeholder="filter list" />
        </form>        
        <List items={this.correctList()} handleDelete={this.handleDelete} /> 
      </div>
    );
  }
}

