import React, { Component } from 'react';
import './App.css';
import Registration from './Registration';

class App extends Component {
  state={
    users:[
      {name:'First',age:40,active:'true',id:1},
      {name:'Second',age:45,active:'true',id:2},
      {name:'Third',age:50,active:'false',id:3},
      
    ]
  }
    render() {    
    return (
      <div className="App">
        <h1>Welcome to react app</h1>
        <Registration users= {this.state.users} xy="temp"/>
      </div>
    );
  }
}

export default App;
