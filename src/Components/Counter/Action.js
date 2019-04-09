import './ReduxDemo'
import { Component } from "react";

class Action extends Component{
increment () {
    this.props.dispatch({ type: 'INCREMENT' });
}

  decrement (){
    this.props.dispatch({ type: 'DECREMENT' });
}
}