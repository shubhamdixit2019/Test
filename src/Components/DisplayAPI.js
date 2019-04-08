import React, { Component } from 'react';

class DisplayAPI extends Component {
    constructor(){
      super();
      this.state ={
        data : null
      }
      this.getData();
    }
  
    getData(){
      let data 
      =
      fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole').
      then((Response)=>{Response.json().
      then((findresponse)=>{
      this.setState({data:findresponse})
      })
    })    
    }
  
    render() {
  
      return (
        <div className="App" >
          <table class="center" >
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Creation Date</th>
                  <th>Balance</th>
              </tr>
         </table > 
          {
          this.state.data ?
          this.state.data.map((item)=>
          <div>
            <table class="center">            
              <tr>
                  <td>{item.first}</td>
                  <td>{item.last}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.created}</td>
                  <td>{item.balance}</td>     
              </tr>
            </table>          
          </div>        
          )
          :
          <h3>Please Wait .... DATA LOADING....</h3>
          }
        </div>
      );
    }
  }
  
  export default DisplayAPI;
  