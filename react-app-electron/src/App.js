import React, { Component } from 'react';
import './App.css';

import List from './components/list';
import View from './components/view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
        <View />
      </div>
    );
  }
}

export default App;
