import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26" />
      </div>
    );
  }
}

export default App;
