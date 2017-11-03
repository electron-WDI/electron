import React, { Component } from 'react';
import './App.css';

import List from './components/list';
import View from './components/view';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "newnote",
      itemclickedid: 0,
      url: 'http://localhost:8080/notes/',
      itemafterdeleted: 0
    }

    this.renderOneView = this.renderOneView.bind(this)
    this.onClickItem = this.onClickItem.bind(this)
    this.afterOneDeleted = this.afterOneDeleted.bind(this)
  }

  renderOneView(id) {
    this.setState({
      mode: "viewone"
    })
  }

  onClickItem(id) {
    this.setState({
      itemclickedid: id,
      mode: 'viewone'
    })
  }

  afterOneDeleted() {
    setTimeout(this.setState({
      mode: "viewone"
    }),2000)
  }

  render() {
      return (
      <div className="App">
        <List dataurl={this.state.url} onClickItem={this.onClickItem}/>
        <View dataurl={this.state.url} mode={this.state.mode} itemclickedid={this.state.itemclickedid} itemafterdeleted={this.afterOneDeleted}/>
      </div>
      )
  }
}

export default App;
