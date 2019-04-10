import React, { Component } from 'react';
import '../App.css';
import List from '../Components/List';
import Header from '../Components/Header';
import AddButton from '../Components/AddButton'
import FilterSearch from '../Components/FilterSearch'
import { Provider } from 'react-redux';
import '../Components/Counter/Counter'
import Counter from '../Components/Counter/Counter';
import  {countStore} from '../Store';


class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchItems: [],      
      searchWordApp : ''
    };
  }

  handleSearch =(searchWord) => {
    let searchedItems = [];
      for (let itemsIterate = 0; 
        itemsIterate < this.state.items.length; itemsIterate++){
      const item = this.state.items[itemsIterate];
      // CASE INSENSITIVE SEARCH
      if ((item.search((new RegExp(searchWord, "i")))) > (-1)) {
      searchedItems.push(item);
      }
    }

    this.setState({
      searchItems: searchedItems,
      searchWordApp: searchWord
    });
  }

  handleDelete = (index) => event => { 
      this.setState(this.state.items.splice(index, 1));
  }

  onSubmit = (term) => {        
      this.setState({      
      items: [...this.state.items, term]
    });
  }

  correctList() {
    let list = this.state.searchWordApp === '' ? 
    this.state.items : this.state.searchItems
    return list;
  }


  render() {
    return (
      <div>
        <Header/>
        <AddButton 
          onSubmit={this.onSubmit}
        />         
        <FilterSearch 
        handleSearch={this.handleSearch}/>  
        <Provider store={countStore}>
        <Counter/>
        </Provider>
        <List items={this.correctList()}
         handleDelete={this.handleDelete}/>        
      </div>
    );
  }
}

export default MainContainer